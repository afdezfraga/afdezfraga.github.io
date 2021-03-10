FROM python:3
ENV PYTHONUNBUFFERED 1
WORKDIR /home
# ENV GITHUB_TOKEN=${{GITHUB_TOKEN}}
RUN apt-get update &&\
    python3 -m pip install scrapy &&\
    python3 -m pip install beautifulsoup4 &&\
    python3 -m pip install requests &&\
    python3 -m pip install jinja2
RUN git clone https://github.com/afdezfraga/afdezfraga.github.io.git &&\
    chmod 775 /home/afdezfraga.github.io/dockerScript.sh
ENTRYPOINT ["/bin/bash", "/home/afdezfraga.github.io/dockerScript.sh"]