FROM python:3
ADD test_script.py /
ADD test_write_file.py /
ADD test_read_file.py /
ADD test_bash.py /
RUN pip install pystrich
CMD ["/test_bash.sh"]