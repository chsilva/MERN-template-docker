FROM node:latest
RUN mkdir -p /usr/src/frontendapp
WORKDIR /usr/src/frontendapp

RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]