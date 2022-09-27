---
sidebar_position: 1
title: Self-Hosting
---

# :bust_in_silhouette: Self-Hosting

There are a few options for self-hosting including a hobby instance, and one click deploy on Heroku.

### :computer: Local Hobby Instance

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)
2. Clone the repo and navigate to the project
   ```sh
   git clone https://github.com/uselotus/lotus.git && cd lotus
   ```
3. Change the environemnt variables located in `env/.env.prod.example` to suit your needs. If you need help you can check out the example environment variables at the bottom of this page. 
4. Rename `env/.env.prod.example` to `env/.env.prod`. Make sure you don't commit your secret environment variables anywhere!
5. Build and run the Docker Image!
   ```sh
   docker-compose -f docker-compose.prod.yaml up --build
   ```
You should now be able to access the homepage at [localhost/](http://localhost/), and sign in using the `ADMIN_USERNAME` and `ADMIN_PASSWORD` you defined.

### :pisces: One-click Deploy with Heroku

Use the button in our [repo](https://github.com/uselotus/lotus) to start a deployment on Heroku.

To get this running properly, you will need to make a couple of modifications to
the project. Navigate to the resources dashboard for your project (`https://dashboard.heroku.com/apps/<your-app-name>/resources`) and do the following:
1. Edit the `web`, `worker`, and `beat` dynos to have at least 1 dyno each.
2. Update the `Heroku Data for Redis` add-on to be at at least the lowest paid tier. The free tier is not compatible with Lotus.
3. Optionally, re-provision the `Heroku Postgres` add-on to be at at least the lowest paid tier. The free tier has only 10,000 rows, which is not enough for most Lotus use-cases.

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
    <td>False</td>
    <td></td>
  </tr>
  <tr>
    <td>SELF_HOSTED</td>
    <td>True</td>
    <td></td>
  </tr>
</table>
