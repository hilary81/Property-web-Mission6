FROM node:alpine

WORKDIR /usr/scr/app

COPY package*.json .



RUN npm ci 


COPY . .

EXPOSE 3000

CMD ["npm", "start"]
