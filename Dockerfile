# Multi-stage production Dockerfile for Next.js Standalone on Google Cloud Run

# Stage 1: Base image with Alpine and libc6-compat
FROM node:20-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Stage 2: Install dependencies
FROM base AS deps
WORKDIR /app

# Install dependencies strictly from package-lock.json
COPY package.json package-lock.json ./
RUN npm ci

# Stage 3: Build the application
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Disable telemetry and set production environment for build
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN npm run build

# Stage 4: Production runner
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Cloud Run defaults: Port 8080 and bind to 0.0.0.0
ENV PORT=8080
ENV HOSTNAME="0.0.0.0"

# Create a non-root system user and group
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy static assets from public folder
COPY --from=builder /app/public ./public

# Set up prerender cache directory with proper ownership
RUN mkdir .next && chown nextjs:nodejs .next

# Copy standalone build output and static assets
# Standalone contains minimal server.js, dependencies, and traced files
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Run container as non-root user
USER nextjs

# Expose default Cloud Run port
EXPOSE 8080

# Start Next.js standalone server
CMD ["node", "server.js"]
