#!/bin/sh

docker build --file gittyleaks/Dockerfile -t cibuilds/docker:latest -t cibuilds/docker:19.03.5  -t cibuilds/docker:19.03 .
