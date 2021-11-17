FROM node:14-alpine as builder
ARG NODE_ENV
ARG BUILD_FLAG
WORKDIR /app/builder

RUN apk add  make gcc g++

COPY . .

RUN npm i