FROM node:5.9.0

# Create app directory
RUN mkdir /usr/src/app
RUN mkdir /usr/src/node_modules

# Install app dependencies
RUN npm install supervisor -g
WORKDIR /usr/src/app

CMD export NODE_PATH=/usr/src/node_modules && cp package.json /usr/src && npm install --prefix /usr/src && npm start

EXPOSE 9001
