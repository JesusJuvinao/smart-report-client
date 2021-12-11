# Production image, copy all the files and run next
FROM node:14.17-alpine
RUN mkdir /next-app
# Set working directory
WORKDIR /next-app

# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package.json  /next-app

# Install dependencies
RUN npm install

# Copy all files
COPY . /next-app  

# Build app
RUN npm run build

USER node

# Launch app with PM2
CMD [ "npm", "start"]