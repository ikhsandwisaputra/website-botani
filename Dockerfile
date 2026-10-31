# Step 1: Build stage
FROM node:22-alpine AS builder

# Set working directory
WORKDIR /app

# Salin file dependency
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin semua file project ke image
COPY . .

# Build project (Next.js)
RUN npm run build

# Step 2: Production image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy hasil build dari tahap sebelumnya
COPY --from=builder /app ./

# Expose port default Next.js
EXPOSE 3000

# Jalankan Next.js app
CMD ["npm", "start"]
