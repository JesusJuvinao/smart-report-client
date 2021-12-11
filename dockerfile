# Production image, copy all the files and run next
FROM node:14
RUN mkdir /ec_frontend
# Set working directory
WORKDIR /ec_frontend

# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package.json  /ec_frontend

# Install dependencies
RUN npm install

# Copy all files
COPY . /ec_frontend  

# Build app
RUN npm run build

# Launch app with PM2
CMD [ "npm", "start"]