# Base image
FROM node:18

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy Prisma schema and all source code
COPY prisma ./prisma
COPY . .

# Generate Prisma client for the container's platform
RUN npx prisma generate

# Expose the port your app runs on
EXPOSE 3000

# Command to start the app
CMD ["npm", "start"]
