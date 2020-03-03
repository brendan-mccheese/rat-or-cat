FROM node:12

ARG API_GATEWAY_URL

WORKDIR /src

COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile

ADD . /src

RUN echo '"'${API_GATEWAY_URL}'"'
RUN echo '{ "/api": { "target": "'${API_GATEWAY_URL}'", "pathRewrite": { "^/api": "" } } }' > proxy.conf.json

ENTRYPOINT yarn start
