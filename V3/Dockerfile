FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install -g npm@11.4.2
RUN npm cache clean --force
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
