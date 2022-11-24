---
sidebar_position: 1
title: Self-Hosting
---

# :bust_in_silhouette: Self-Hosting

Best if you want to keep your data local or want full control and extensibility.

### :computer: Local Hobby Instance

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop/) and make sure it is running.
2. Clone the repo and navigate to the project
   ```sh
   git clone https://github.com/uselotus/lotus.git && cd lotus
   ```
3. Change the environment variables located in `env/.env.prod.example` to suit your needs. If you need help you can check out the example environment variables at the bottom of this page.
4. Rename `env/.env.prod.example` to `env/.env.prod`. Make sure you don't commit your secret environment variables anywhere!
5. Build and run the Docker Image!
   ```sh
   docker-compose -f docker-compose.prod.yaml up --build
   ```
   You should now be able to access the homepage at [localhost/](http://localhost/), and sign in using the `ADMIN_USERNAME` and `ADMIN_PASSWORD` you defined.

We are currently working on easy deployment options for AWS, GCP, and Azure. If you have any questions, feel free to reach out to us.

### Local Hobby Env variables

<table>
  <tr>
    <th>Variable Name</th>
    <th>(Default) Value</th>
    <th>Change?</th>
  </tr>
  <tr>
    <td>POSTGRES_USER</td>
    <td>lotus</td>
    <td>&#10004;</td>
  </tr>
  <tr>
    <td>POSTGRES_DB</td>
    <td>lotus</td>
    <td>&#10004;</td>
  </tr>
  <tr>
    <td>POSTGRES_PASSWORD</td>
    <td>lotus</td>
    <td>&#10004;</td>
  </tr>

  <tr>
    <td>SECRET_KEY</td>
    <td>change_me</td>
    <td>&#10004;</td>
  </tr>
  <tr>
    <td>ADMIN_USERNAME</td>
    <td>admin</td>
    <td>&#10004;</td>
  </tr>
  <tr>
    <td>ADMIN_EMAIL</td>
    <td>example@example.com</td>
    <td>&#10004;</td>
  </tr>
  <tr>
    <td>ADMIN_PASSWORD</td>
    <td>insecure_password</td>
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
  <tr>
    <td>DOCKERIZED</td>
    <td>True</td>
    <td></td>
  </tr>
  <tr>
    <td>DJANGO_SETTINGS_MODULE</td>
    <td>"lotus.settings"</td>
    <td></td>
  </tr>

  <tr>
    <td>NODE_ENV</td>
    <td>production</td>
    <td></td>
  </tr>
  <tr>
    <td>VITE_API_URL</td>
    <td>"http://localhost/"</td>
    <td></td>
  </tr>

  <tr>
    <td>VITE_STRIPE_CLIENT</td>
    <td>ca_</td>
    <td>&#10004;</td>
  </tr>
  <tr>
    <td>STRIPE_LIVE_SECRET_KEY</td>
    <td>sk_live_</td>
    <td>&#10004;</td>
  </tr>
  <tr>
    <td>STRIPE_TEST_SECRET_KEY</td>
    <td>sk_test_</td>
    <td>&#10004;</td>
  </tr>
  <tr>
    <td>WEBHOOK_SECRET</td>
    <td>whsec_</td>
    <td>&#10004;</td>
  </tr>
</table>
