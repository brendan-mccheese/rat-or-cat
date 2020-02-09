FROM node:12 as frontend-build

WORKDIR /app

# Install dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile

# Build
COPY . .
RUN yarn build

FROM openresty/openresty:alpine

RUN rm -rf /usr/local/openresty/nginx/html*

COPY nginx.conf /usr/local/openresty/nginx/conf/nginx.conf

COPY --from=frontend-build /app/dist/rat-or-cat /usr/local/openresty/nginx/html
