# Production image, copy all the files and run next
FROM node:14.17-alpine  AS runner
RUN mkdir /next-app
# Set working directory
WORKDIR /next-app

# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package.json  /next-app
COPY package*.json ./
# Install dependencies
RUN npm install

# Copy all files
COPY . /next-app  

# Build app
RUN npm run build

ENV NODE_ENV production

EXPOSE 3000

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER node

# Launch app with PM2
CMD [ "npm", "start"]