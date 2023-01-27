FROM node:16-alpine
WORKDIR /usr/local/apps/image-storage

COPY package.json ./
RUN npm install && npm cache clean --force
ENV PATH=/usr/local/image-storage/node_modules/.bin:$PATH

WORKDIR /usr/local/apps/image-storage

COPY tsconfig.json ./

COPY . .
COPY .env ./

EXPOSE ${PORT}

RUN npm run build
CMD ["npm", "run", "start:watch"]