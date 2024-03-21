FROM node:21.1

WORKDIR /backend

COPY package*.json ./

RUN npm install

# Copy the rest of your app's source code to the working directory
COPY . .

EXPOSE 3001

# start Express app
CMD ["node", "server.js"]
