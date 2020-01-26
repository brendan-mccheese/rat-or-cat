# RAT or CAT?

An over-engineered implementation of an image recognition game. The simple aim is to identify
whether the image displayed is a rat or a cat.

## Architecture

The frontend is built using Angular 8.

The backend consists of services that use NestJS. 

The whole thing is written in Typescript.

## Structure

All packages for the game are located in the `packages` directory.

- TODO: Wire up packages using yarn workspaces/lerna

## Requirements

- Node 12+
- Yarn

## Running instructions

From a clean repo first run `yarn install`. To install project utilities.

Then run `yarn bootstrap` to install package dependencies.

When everything has been installed, you can start everything from the root by running `yarn start`

## Development

Each package has its own package.json with various run scripts inside. Run each project separately
during development to get a better understanding of what is going on.

Run configurations for WebStorm are stored in the repo.

The Angular project uses `proxy.conf.json` to root calls from `/api/*` to backend services.

## Things to be implemented

- Swap out karma for jest in angular project and start writing proper tests 
- Local persistence of state to allow for hard refresh
- Store user's high scores
- Allow users to view a leaderboard
- Add time tracking to complete the steps and add to result
- Refactor routing to allow for dynamic length of questions

## Deployment

Deployment hasn't been started but the aim will be to run containerized in AWS.

- TODO: Build and deploy from CircleCI
- TODO: Add DockerFiles
- TODO: Add Terraform script for setting up/tearing down AWS ECS (Fargate)
- TODO: Add nginx project to act as API gateway, avoiding CORS