FROM ubuntu:18.04
WORKDIR /
COPY . /
RUN apt update \
    apt-get install -y python3 \
    python3 -m pip install scrapy \
    cd my_git_hub_spider
CMD ["cat", "github.csv"]
