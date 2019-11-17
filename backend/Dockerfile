FROM node:latest
RUN mkdir -p /usr/src/backendapp
WORKDIR /usr/src/backendapp

RUN npm install

EXPOSE 8888
CMD [ "npm", "start" ]