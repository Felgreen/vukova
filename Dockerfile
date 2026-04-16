# ─── Stage 1: Install dependencies ──────────────────────────────────────────
FROM node:20-alpine AS deps

# Install libc compatibility for native modules (sharp, etc.)
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copy package files and install production + dev dependencies
COPY package.json package-lock.json ./
RUN npm ci

# ─── Stage 2: Build the application ─────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Copy installed node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy all source files
COPY . .

# Build the Next.js app (produces .next/standalone via output: 'standalone')
# Environment variables needed at build time must be passed here
ARG NEXT_PUBLIC_MP_PUBLIC_KEY
ARG NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_MP_PUBLIC_KEY=$NEXT_PUBLIC_MP_PUBLIC_KEY
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL

RUN npm run build

# ─── Stage 3: Production runtime ─────────────────────────────────────────────
FROM node:20-alpine AS runner

WORKDIR /app

# Security: run as non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy only the standalone output (minimal set of files to run the app)
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Set correct ownership
RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
ENV NODE_ENV=production

# Health check: hits /api/health every 30s
# Fails after 3 consecutive failures (90s total) → Docker marks unhealthy and restarts
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD wget -qO- http://localhost:3000/api/health || exit 1

# Start the standalone Next.js server
CMD ["node", "server.js"]
