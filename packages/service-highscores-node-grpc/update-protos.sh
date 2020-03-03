#!/usr/bin/env bash

mkdir -p ./src/grpc

protoc -I=../protos ../protos/highscore-service.proto  \
  --js_out=import_style=commonjs,binary:./src/grpc   \
  --grpc_out=./src/grpc   \
  --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin

protoc --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
--ts_out=./src/grpc \
-I ../protos \
../protos/*.proto
