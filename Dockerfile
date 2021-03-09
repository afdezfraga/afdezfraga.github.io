FROM ubuntu:18.04
WORKDIR /
COPY . /
RUN apt update &&\
    apt install python3-pip -y &&\
    python3 -m pip install scrapy &&\
    cd my_git_hub_spider &&\
    scrapy crawl GitHubSpider -o github.csv -t csv &&\
    python3 -m pip install requests &&\
    cd .. &&\
    python3 gitHubApiCaller.py ./my_git_hub_spider/github.csv ./githubWithCommits.csv
CMD ["cat", "githubWithCommits.csv"]
