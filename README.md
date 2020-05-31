# REST API SERVING USERS DATA

## Setup
1. Run `yarn install` to install necessary packages 
2. Run yarn `yarn start` to start server

## Endpoints
1. GET `http://localhost:3000/users/` - returns a list of users
2. GET `http://localhost:3000/users/:id` - return one user if a user with the specified id on the param is valid and exists

## RUN app using docker
1. `docker build -t api-users .` - run command to build docker image and tag it as `api-users`
2. `docker run -p 3000:3000 -it api-users` - start container and map to 3000. 
- App should be running on port 3000