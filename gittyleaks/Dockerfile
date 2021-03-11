FROM python:3
ENV PYTHONUNBUFFERED 1
WORKDIR /home
RUN apt-get update &&\
    python3 -m pip install gittyleaks  &&\
    git clone https://github.com/afdezfraga/afdezfraga.github.io.git &&\
    chmod 775 /home/afdezfraga.github.io/gittyleaks/circleCiScript.sh
ENTRYPOINT ["/bin/bash", "/home/afdezfraga.github.io/gittyleaks/circleCiScript.sh"]
