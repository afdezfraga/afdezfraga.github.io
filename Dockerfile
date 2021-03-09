FROM python:3
ENV PYTHONUNBUFFERED 1
WORKDIR /home
# ENV GITHUB_TOKEN=${{GITHUB_TOKEN}}
RUN apt-get update &&\
    python3 -m pip install scrapy &&\
    python3 -m pip install beautifulsoup4 &&\
    python3 -m pip install requests
RUN git clone https://github.com/afdezfraga/afdezfraga.github.io.git &&\
    git config --global user.email "PE-2021q1@torusware.com" &&\
    git config --global user.name "Becarios Torus" &&\
    chmod 775 /home/afdezfraga.github.io/dockerScript.sh
CMD ./afdezfraga.github.io/dockerScript.sh