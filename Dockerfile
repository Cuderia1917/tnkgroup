FROM httpd:2.4.38-alpine

MAINTAINER ponkio_o

RUN apk update && \
    apk upgrade && \
    apk add --no-cache \
    bash \
    git

RUN git clone https://github.com/Cuderia1917/tnkgroup.git && \
    cp -pR ./tnkgroup/* /usr/local/apache2/htdocs/ && \
    rm -rf tnkgroup
