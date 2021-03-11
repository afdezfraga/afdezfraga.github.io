FROM python:3
ENV PYTHONUNBUFFERED 1
WORKDIR /home
RUN apt-get update &&\
    python3 -m pip install gittyleaks 
ENTRYPOINT ["gittyleaks", "-u",  "afdezfraga", "-r", "afdezfraga.github.io", "-d", "-o", "-a" ]
