FROM python:3
ADD test_script.py /
ADD test_write_file.py /
ADD test_read_file.py /
RUN pip install pystrich
CMD [ "python", "./test_write_file.py" ]
ADD testfile.txt /