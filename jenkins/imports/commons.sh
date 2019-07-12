#!/usr/bin/env bash

set -o pipefail
set -o nounset
[[ "x${ERREXIT:-}" = "x1" || "${ERREXIT:-}" = "" ]] && set -o errexit
[[ "x${TRACE:-}" = "x1" ]] && set -o xtrace

# exports
export PYTHONUNBUFFERED=1 # to avoid buffering on jenkins console
export WORKSPACE=${WORKSPACE:-}
export BUILD_NUMBER=${BUILD_NUMBER:-}
export IMPORTS=${WORKSPACE}/scripts/imports
export TESTRAIL_PLAN_NAME_IDENTIFIER=${TESTRAIL_PLAN_NAME_IDENTIFIER:-}
export ENV_FILE=${ENV_FILE:-'_environment.env'}

export DOCKER_TAG=${DOCKER_TAG:-'aurea-cloud/protractor'}
export DOCKER_NAME=${DOCKER_NAME:-'aurea-cloud-protractor'}

export DEFAULT_ADMIN_PASSWORD=${DEFAULT_ADMIN_PASSWORD:-'admin'}
export TESTRAIL_PUBLISH=${TR_PUBLISH:-'false'}
params="-e x=y"

function read_env_file() {

    [[ -f ${ENV_FILE} ]] && source ${ENV_FILE}

    export INSTANCE_URL=${INSTANCE_URL:-"http://localhost:8080"}

    echo 'found in environment file:'
    echo "INSTANCE_URL=${INSTANCE_URL}"
    echo "TESTRAIL_PLAN_NAME_IDENTIFIER=${TESTRAIL_PLAN_NAME_IDENTIFIER}"
}

function docker_build_protractor() {
    docker build -t ${DOCKER_TAG} ${WORKSPACE}/automated-protractor-tests
    echo 'Done Image building.. Boom Boom'
    echo 'Starting env file reading'
    read_env_file
    echo 'Starting docker clean up'
    docker_cleanup
    echo 'Starting docker run'
    docker_run
}

function docker_cleanup() {
    echo "cleaning up docker (errors for container not found is ok)"
    docker stop ${DOCKER_NAME} || true
    docker rm ${DOCKER_NAME} || true
    echo 'Done Cleanup.. Boom Boom'
}

function docker_run() {
    getParams
    docker run -d -v /dev/shm:/dev/shm --shm-size=5g -e BUILD_NUMBER=${BUILD_NUMBER} $params --name ${DOCKER_NAME} ${DOCKER_TAG}
    echo 'Container UP.. Boom Boom'
}

function docker_exec_protractor() {
    PROTRACTOR_FILE="${1:-protractor.conf.js}"
    SUITE="${2:-e2e}"
    PROTRACTOR_CMD="protractor $PROTRACTOR_FILE --suite=$SUITE --baseUrl=$INSTANCE_URL"

    echo "going to execute protractor with ${DOCKER_NAME} and: ${PROTRACTOR_CMD}"
    docker exec -i ${DOCKER_NAME} sh -c "${PROTRACTOR_CMD}" || true
    echo "executed protractor with ${DOCKER_NAME}"
    echo 'Done test execution.. Boom Boom '
}

function docker_export_reports() {
    echo 'Copying allure results'
    docker cp ${DOCKER_NAME}:auto-generated/allure-results ./allure-results
    docker cp ${DOCKER_NAME}:target ./target
    echo 'Copied Junit report to '
    ls ./target
    echo 'Publishing result to TestRail'
    if [ $TESTRAIL_PUBLISH == false ]; then
    	echo "TestRail Publishing is disabled by flag TR_PUBLISH = $TESTRAIL_PUBLISH"
    else
    	echo "TestRail Publishing is enabled by flag TR_PUBLISH = $TESTRAIL_PUBLISH"
       docker exec -e GIT_BRANCH=${GIT_BRANCH} -i ${DOCKER_NAME} npm run publish:testrail
    fi
    echo 'Done Testrail results publishing.. Boom Boom '
}

function no_docker_setup() {
    echo 'running command to build package'
    npm update
    npm install
    echo 'Done setup.. Boom Boom '
}

function nodocker_exec_protractor() {
    npm install protractor --save-dev
    PROTRACTOR_FILE="${1:-protractor.conf.js}"
    SUITE="${2:-e2e}"
    PROTRACTOR_CMD="node_modules/.bin/protractor $PROTRACTOR_FILE --suite=$SUITE --baseUrl=$INSTANCE_URL"

    echo "going to execute protractor commnad ${PROTRACTOR_CMD}"
    ${PROTRACTOR_CMD} || true
    echo 'Done test execution .. Boom Boom '
}

function nodocker_exec_retry() {
    echo "Executing nodocker retry prepare and rerun..."
    npm run retry:prepare || npm run e2e:rerun
}

function nodocker_export_reports() {
    echo 'Publishing result to TestRail'
    if [ $TESTRAIL_PUBLISH == false ];
    then
       echo "TestRail Publishing is disabled by flag TR_PUBLISH = $TESTRAIL_PUBLISH"
    else
       npm run publish:testrail
       echo 'Done Testrail results publishing.. Boom Boom '
    fi
}

function getParams() {
    env > env.txt
    declare myarray
    declare tmparray
    declare array
    array[0]="TERM"
    array[1]="TERM_PROGRAM"
    array[2]="SHELL"
    array[3]="TMPDIR"
    array[4]="Apple_PubSub_Socket_Render"
    array[5]="TERM_PROGRAM_VERSION"
    array[6]="TERM_SESSION_ID"
    array[7]="SSH_AUTH_SOCK"
    array[8]="__CF_USER_TEXT_ENCODING"
    array[9]="PATH"
    array[10]="PWD"
    array[11]="XPC_SERVICE_NAME"
    array[12]="M2_HOME"
    array[13]="HOME"
    array[14]="SHLVL"
    array[15]="LOGNAME"
    array[16]="LC_CTYPE"
	i=0;
	for h in `cat env.txt`
	do
   		myarray[$i]=$h;
    	i=$(($i+1));
	done
    tmparray=( "${myarray[@]}" )
    for ((k=0; k<${#array[@]}; ++k))
    do
	    envvar_=${array[$k]}
	    for  ((j=0; j<${#myarray[@]}; ++j))
	    do
		    envvarx=${myarray[$j]}
		    if [[ $envvarx =~ $envvar_* ]];then
			    unset 'tmparray[j]'
		    fi
	    done
    done
    echo $tmparray
    for l in "${tmparray[@]}"
    do
 	    params="$params -e $l"
    done
    echo $params
}
