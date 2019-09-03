#getting base image nginx
# FROM nginx
FROM nginx:stable

COPY nginx/conf.d /etc/nginx/conf.d
COPY wp /var/www/wp

CMD ["nginx", "-g", "daemon off;"]

# display any in terminal



# COPY nginx /var/www/nginx





# build image need to be in the dir
# docker build -t any-name-here .


# then run image 
# docker run imageID