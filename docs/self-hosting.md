---
sidebar_position: 1
---

# Self-Hosting

There are a few options for self-hosting including a hobby instance, and one click deploy on Heroku.

#### :computer: Local Hobby Instance

1. Clone the repo and navigate to the project
   ```sh
   git clone https://github.com/uselotus/lotus.git && cd lotus
   ```
2. Create the necessary environment variables by following [this guide in our docs](https://uselotus.stoplight.io/docs/lotus-docs/branches/main/ylqsg3i42dd5z-docker-self-host-env).
3. Build and run the Docker Image!
   ```sh
   export DOCKER_BUILDKIT=0 &&
   docker-compose --env-file env/.env -f docker-compose.prod.yaml up --build
   ```
   You should now be able to access the homepage at [localhost/](http://localhost/), and sign in using the `ADMIN_USERNAME` and `ADMIN_PASSWORD` you defined.

### Heroku One Click

Use the button in our [repo](https://github.com/uselotus/lotus) to start a deployment on Heroku.
