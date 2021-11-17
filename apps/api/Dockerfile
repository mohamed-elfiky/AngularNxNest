FROM my-base-image:nx-base AS builder

ARG NODE_ENV=production
ARG BUILD_FLAG=production
WORKDIR /app/builder
COPY . .
RUN npx nx build api ${BUILD_FLAG}

FROM my-base-image:nx-base

WORKDIR /app
COPY --from=builder /app/builder/dist/apps/api ./
ENV NODE_ENV=$NODE_ENV

CMD ["node", "main.js"]