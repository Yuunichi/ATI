FROM ubuntu

RUN apt-get update -y && apt-get upgrade -y && apt-get install nano
RUN apt install -y apache2
RUN apt install -y apache2-utils
RUN apt clean

EXPOSE 80

CMD ["apache2ctl", "-D","FOREGROUND"]
COPY . /usr/local/apache2/htdocs/

#docker build -t apache_image .
#docker run --name apache_container -d -p 8080:80 apache_image