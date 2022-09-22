FROM node:alpine

WORKDIR /usr/scr/app

COPY package.json package-lock.json 



RUN npm install --legacy-peer-deps


COPY . .

EXPOSE 3000

CMD ["npm", "start"]
