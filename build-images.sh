#!/bin/sh

docker build --file gittyleaks/Dockerfile -t gittyleaks .
docker run gittyleaks
