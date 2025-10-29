FROM node:22-alpine
WORKDIR /app
COPY package.json /app
RUN npm install
COPY index.html /app
COPY index.js /app
CMD ["node", "index.js"]
EXPOSE 3000