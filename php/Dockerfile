FROM php:7.3-fpm

COPY ./php/php.ini /usr/local/etc/php/

WORKDIR /var/www/app/admin

RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli

CMD "php-fpm"