FROM python:3
ADD test_script.py /
ADD test_write_file.py /
ADD test_read_file.py /
ADD test_bash.sh /
RUN chmod +x /test_bash.sh
RUN pip install pystrich
CMD ["/test_bash.sh"]