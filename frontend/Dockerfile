# frontend/Dockerfile
# Build Stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
RUN npm run build

# Serve Stage
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 3000
# Update default Nginx port to 3000 for docker-compose matching
RUN sed -i 's/80/3000/g' /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
