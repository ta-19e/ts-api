FROM node:12

WORKDIR /app

COPY . .

RUN npm install --production

EXPOSE 3000

USER node
ENV NODE_ENV=production

CMD ["node", "dist/main.js"]
