FROM node:16-alpine
WORKDIR /app
COPY . .
COPY package.json .
COPY package-lock.json .
RUN npm i
EXPOSE 3000
RUN npm run build
CMD ["npm", "run", "start"]