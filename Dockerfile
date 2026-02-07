FROM node:lts-alpine as build-stage

WORKDIR /app

COPY package.json /app/package.json
COPY . /app/

RUN npm install
RUN npm run build

FROM nginx:stable-alpine as production-stage
EXPOSE 8082
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx_config/default.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]