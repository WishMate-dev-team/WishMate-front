FROM node:21.5.0-alpine
COPY package.json ./
COPY . ./
RUN npm install
EXPOSE 3000
CMD ["npm","build"]