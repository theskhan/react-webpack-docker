FROM mhart/alpine-node:5.10.1

# Create app directory
RUN mkdir /usr/src
RUN mkdir /usr/src/app
RUN mkdir /usr/src/node_modules

ENV NODE_PATH=/usr/src/node_modules
COPY package.json /usr/src
RUN npm install --prefix /usr/src

#COPY . /usr/src/app

RUN npm install babel-cli -g
RUN npm install webpack -g

#RUN npm run build-server
#RUN npm run build-webpack

WORKDIR /usr/src/app

ENV NODE_ENV=development 
ENV PORT=8080

CMD export NODE_PATH=/usr/src/node_modules &&  npm run build-server && npm run build-webpack && npm run start
#CMD [ "/usr/local/bin/npm", "run", "start" ]

EXPOSE 8080