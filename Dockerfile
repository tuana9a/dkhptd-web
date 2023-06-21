FROM node:16.19.0-slim AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build:prod
# Serve Application using Nginx Server
FROM nginx:1.25.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/dkhptd-web/ /usr/share/nginx/html
EXPOSE 80