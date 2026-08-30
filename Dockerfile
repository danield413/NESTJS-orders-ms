FROM node:22.12-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3002