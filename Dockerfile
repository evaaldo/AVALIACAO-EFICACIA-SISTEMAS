FROM node:20 as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm install @angular/cli -g
EXPOSE 4000
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4000", "--disable-host-check"]
