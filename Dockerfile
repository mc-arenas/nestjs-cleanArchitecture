FROM node:14-alpine

WORKDIR /app

ADD package*.json ./
RUN npm install

ADD . .

RUN npm run build

CMD ["node", "dist/main.js"]