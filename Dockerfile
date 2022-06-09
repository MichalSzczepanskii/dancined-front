FROM node:16.15.0-alpine
WORKDIR /usr/app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4200
CMD npm start
