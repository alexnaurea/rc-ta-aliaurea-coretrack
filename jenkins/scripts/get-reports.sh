#!/usr/bin/env bash

source ${WORKSPACE}/jenkins/imports/commons.sh

echo 'shell script before reports'

docker_export_reports

echo 'shell script reports finished'
