#!/usr/bin/env bash

source ${WORKSPACE}/jenkins/imports/commons.sh

echo 'shell script protractor started'
docker_exec_protractor ${1:-'<PROTRACTOR_CONFIG_FILE>'} ${2:-'<SUITE_NAME>'} --params.debug=true
echo 'shell script protractor finished'
