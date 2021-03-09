FROM ubuntu:18.04
WORKDIR /
COPY . /
ENV: GITHUB_TOKEN
RUN apt update &&\
    apt install python3-pip -y &&\
    python3 -m pip install scrapy &&\
    python3 -m pip install beautifulsoup4 &&\
    cd my_git_hub_spider &&\
    scrapy crawl GitHubSpider -o github.csv -t csv &&\
    python3 -m pip install requests &&\
    cd .. &&\
    python3 gitHubApiCaller.py ./my_git_hub_spider/github.csv ./githubWithCommits.csv &&\
    apt install git -y &&\
    git config --local user.email "41898282+github-actions[bot]@users.noreply.github.com" &&\
    git config --local user.name "github-actions[bot]" &&\
    git remote set-url origin https://x-access-token:GITHUB_TOKEN@github.com:afdezfraga/afdezfraga.github.io.git &&\
    git checkout main &&\
    git add githubWithCommits.csv &&\
    git commit -am "Automated report" &&\
    git push
