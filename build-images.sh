#!/bin/sh

docker build --file gittyleaks/Dockerfile -t gittyleaks .
docker run -e BOTNAME=$BOTNAME -e BOTPASSWD=$BOTPASSWD -e BOTTEST=$BOTTEST gittyleaks
