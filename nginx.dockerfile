FROM node:14.17.3-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/indicators-web /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]