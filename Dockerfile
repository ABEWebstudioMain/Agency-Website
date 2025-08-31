# ========= DEPS =========
FROM node:20-alpine AS deps
WORKDIR /app
# Nur was fürs Install nötig ist, erhöht Cache-Hitrate
COPY package.json package-lock.json ./
# Volle Dev-Dependencies, weil der Build sie braucht (z. B. TypeScript/ESLint)
RUN npm ci

# ========= BUILDER =========
FROM node:20-alpine AS builder
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
# Jetzt den restlichen Code
COPY . .
# Baut dein Next.js (mit "prisma generate && next build" laut package.json)
RUN npm run build

# ========= RUNNER =========
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Non-root User + Healthcheck-Tool
RUN addgroup -S nodejs \
 && adduser -S nextjs -G nodejs \
 && apk add --no-cache curl

# Ordner anlegen & Besitzer setzen (wichtig für Next static/.next)
RUN mkdir -p .next && chown -R nextjs:nodejs /app

# Nur nötige Artefakte aus dem Build übernehmen
COPY --from=builder /app/public ./public
# Standalone enthält server.js + pruned node_modules fürs Runtime
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

# Der Container lauscht auf 3000; EXPOSE sollte nicht auf eine undef. Variable zeigen
EXPOSE 3000

# Healthcheck: prüft, ob der Server antwortet
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
  CMD curl --fail http://localhost:3000/ || exit 1

# Startet die von Next generierte Standalone App
CMD ["node", "server.js"]