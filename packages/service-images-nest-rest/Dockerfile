FROM node:12 as build
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

FROM node:12
WORKDIR /app
COPY --from=build /app/dist /app/dist
COPY --from=build /app/public /app/public
COPY --from=build /app/node_modules /app/node_modules

ENTRYPOINT ["node", "dist/main.js"]