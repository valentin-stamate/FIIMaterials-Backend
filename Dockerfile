FROM node:16-alpine
WORKDIR /home/app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "start"]