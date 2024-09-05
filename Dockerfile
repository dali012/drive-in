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

# Copy only necessary files for build
COPY --chown=node:node package*.json pnpm-lock.yaml ./
COPY --chown=node:node . .

# Install dependencies and build
RUN pnpm install --frozen-lockfile && pnpm build

# Production stage
FROM node:20-alpine AS production
WORKDIR /app

# Set environment variables
ENV NODE_ENV=production

# Copy necessary files from the builder stage
COPY --chown=node:node --from=builder /app/dist ./dist
COPY --chown=node:node --from=builder /app/node_modules ./node_modules
COPY --chown=node:node --from=builder /app/package.json ./
COPY --chown=node:node --from=builder /app/views ./views
COPY --chown=node:node --from=builder /app/src/mail/mail-templates ./src/mail/mail-templates

# Set up application directory
RUN mkdir -p src/generated && chown -R node:node src

USER node

# Start the application
CMD [ "node", "dist/main.js" ]
