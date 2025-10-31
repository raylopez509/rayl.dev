FROM node:22-alpine
WORKDIR /app
COPY package.json /app
RUN npm install
COPY app.js /app
COPY /public /app/public
CMD ["node", "app.js"]
EXPOSE 3000