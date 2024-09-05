# Base image
FROM node:20-alpine AS base

# Install pnpm globally
RUN npm install -g pnpm

# Development stage
FROM base AS development
WORKDIR /app

# Copy package files and install dependencies
COPY --chown=node:node package*.json pnpm-lock.yaml ./
RUN pnpm install

# Copy application code
COPY --chown=node:node . .

USER node

# Builder stage
FROM base AS builder
WORKDIR /app

# Copy package files and dependencies from the development stage
COPY --chown=node:node package*.json pnpm-lock.yaml ./
COPY --chown=node:node --from=development /app/node_modules ./node_modules
COPY --chown=node:node --from=development /app/src ./src
COPY --chown=node:node --from=development /app/tsconfig.json ./tsconfig.json
COPY --chown=node:node --from=development /app/tsconfig.build.json ./tsconfig.build.json
COPY --chown=node:node --from=development /app/nest-cli.json ./nest-cli.json

# Build the application
RUN pnpm build

# Production stage
FROM node:20-alpine AS production
WORKDIR /app

# Set environment variables
ENV NODE_ENV=production

# Copy necessary files from the builder stage
COPY --chown=node:node --from=builder /app/node_modules ./node_modules
COPY --chown=node:node --from=builder /app/dist ./dist
COPY --chown=node:node --from=builder /app/package.json ./

# Set up application directory
RUN mkdir -p src/generated && chown -R node:node src

USER node

# Start the application
CMD [ "node", "dist/main.js" ]