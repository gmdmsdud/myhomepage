
FROM node:14

COPY ./package.json /freeBoard/
COPY ./yarn.lock /freeBoard/
WORKDIR /freeBoard/
RUN yarn install

COPY . /freeBoard/

RUN yarn build 
CMD yarn start
