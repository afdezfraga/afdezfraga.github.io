#!/bin/sh

echo $BOTNAME
docker build --file gittyleaks/Dockerfile -t gittyleaks .
docker run gittyleaks
