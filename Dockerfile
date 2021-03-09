FROM ubuntu:18.04
WORKDIR /
COPY . /
RUN apt update &&\
    apt install python3-pip &&\
    
    python3 -m pip install scrapy
CMD ["ls"]
