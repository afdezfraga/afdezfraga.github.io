FROM ubuntu:18.04
WORKDIR /
COPY . /
RUN apt-get update \
    apt-get install -y python3 \
    python3 -m pip install scrapy \
CMD ["ls"]
