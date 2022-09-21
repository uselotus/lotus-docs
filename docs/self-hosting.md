---
sidebar_position: 1
---

# Self-Hosting

There are a few options for self-hosting including a hobby instance, and one click deploy on Heroku.

### :computer: Local Hobby Instance

1. Clone the repo and navigate to the project
   ```sh
   git clone https://github.com/uselotus/lotus.git && cd lotus
   ```
2. Create the necessary environment variables by following the default variables below.
3. Build and run the Docker Image!
   ```sh
   export DOCKER_BUILDKIT=0 &&
   docker-compose --env-file env/.env -f docker-compose.prod.yaml up --build
   ```
   You should now be able to access the homepage at [localhost/](http://localhost/), and sign in using the `ADMIN_USERNAME` and `ADMIN_PASSWORD` you defined.

### Heroku One Click

Use the button in our [repo](https://github.com/uselotus/lotus) to start a deployment on Heroku.

### Local Hobby Env variables

<table>
<tr>
    <th>Variable Name</th>
    <th>(Default) Value</th>
    <th>Change?</th>
  </tr>
  <tr>
  <td>SECRET_KEY</td>
    <td>change_me</td>
    <td>&#10004;</td>
  </tr>
  <tr>
  <td>POSTGRES_USER</td>
    <td>lotus</td>
    <td>&#10004;</td>
  </tr>
  <tr>
  <td>POSTGRES_NAME</td>
    <td>lotus</td>
    <td>&#10004;</td>
  </tr>
   <tr>
  <td>POSTGRES_PASSWORD</td>
    <td>lotus</td>
    <td>&#10004;</td>
  </tr>
   <tr>
  <td>ADMIN_PASSWORD</td>
    <td>insecure_password</td>
    <td>&#10004;</td>
  </tr>
   <tr>
  <td>ADMIN_EMAIL</td>
    <td>example@example.com</td>
    <td>&#10004;</td>
  </tr>
  <tr>
  <td>ADMIN_USERNAME</td>
    <td>admin</td>
    <td>&#10004;</td>
  </tr>
  <tr>
  <td>DOCKERIZED</td>
    <td>True</td>
    <td></td>
  </tr>
  <tr>
  <td>STRIPE_SECRET_KEY</td>
    <td>change_me</td>
    <td>&#10004;</td>
  </tr>
  <tr>
  <td>DEBUG</td>
    <td>True</td>
    <td></td>
  </tr>
  </table>
