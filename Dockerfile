# Install dependencies only when needed
FROM node:18.13-alpine AS deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:18.13-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
COPY prisma ./prisma/
RUN yarn build

# Production image
FROM node:18.13-alpine AS runner
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

RUN mkdir -p /app
WORKDIR /app

COPY package*.json ./

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY ./.env ./.env

EXPOSE 3000

ENTRYPOINT [ "yarn" ]
CMD ["start:migrate:prod"]
