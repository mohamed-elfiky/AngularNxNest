FROM my-base-image:nx-base AS builder

ARG NODE_ENV
ARG BUILD_FLAG
WORKDIR /app/builder
COPY . .
RUN npx nx build demo ${BUILD_FLAG}

FROM nginx:1.19.2

COPY --from=builder /app/builder/dist/apps/demo ./