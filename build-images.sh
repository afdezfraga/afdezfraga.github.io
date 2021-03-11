#!/bin/sh

echo $BOTNAME
docker build --file gittyleaks/Dockerfile -t gittyleaks .
docker run -e BOTNAME=$BOTNAME -e BOTPASSWD=$BOTPASSWD gittyleaks
