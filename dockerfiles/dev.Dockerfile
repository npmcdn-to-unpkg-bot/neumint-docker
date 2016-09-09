# Docker version 1.12.0, build 8eab29e
FROM node:latest

MAINTAINER Mahesh Pesani

# sets the environment variable <key> to the value <value>
ENV NODE_ENV=development 
ENV PORT=3000

# copies new files or directories from <src> and adds them to the filesystem of the container at the path <dest>
COPY      . /var/www

# sets the working directory 
WORKDIR   /var/www

# execute any commands in a new layer on top of the current image and commit the results
RUN       npm install


# app binds to port 3000 so we'll use the EXPOSE instruction to have it mapped by the docker daemon:
EXPOSE $PORT

# configure a container that will run as an executable
ENTRYPOINT ["npm", "start"]

