FROM python:3
ADD test_script.py /
ADD test_write_file.py /
ADD test_read_file.py /
RUN pip install pystrich
RUN python ./test_write_file.py
CMD [ "python", "./test_read_file.py" ]