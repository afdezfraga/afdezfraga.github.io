FROM python:3
ADD my_script.py /
RUN pip install pystrich
CMD [ "python", "./test_script.py" ]