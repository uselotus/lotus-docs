---
sidebar_position: 1
title: Contributing
---

# Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please [fork the repo](https://github.com/uselotus/lotus) and [create a pull request](https://makeapullrequest.com/). You can also simply [request a feature](https://github.com/uselotus/lotus/issues/new?assignees=&labels=&template=feature_request.md&title=).

Don't forget to give the project a star! Thanks again!

## Extensibility

Lotus aims to serve as many use cases as possible! We want to make sure that you can extend the project to fit your needs. We have a special tag in our issues for features that already have a framework or template for you to use, allowing you to enhance the code to fit your needs seamlessly. For example, building a new integration with a payment processor, or hooking up a different CRM.

You can find these issues tagged with the [extensibility label in our Github issues](https://github.com/uselotus/lotus/issues?q=is%3Aopen+is%3Aissue+label%3Aextensibility).

## :construction_worker: Local Development

In order to develop locally, we recommend using Docker to set up the environment, which allows for hot reloading of both frontend and backend code.

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop/) and make sure it is running.
2. Clone the repo (our version, or your fork of it) and navigate to the project.
   ```sh
   git clone https://github.com/uselotus/lotus.git && cd lotus
   ```
3. Change the environment variables located in `env/.env.dev.example` to suit your needs. If you need help you can check out the example environment variables at the bottom of this page.
4. Rename `env/.env.dev.example` to `env/.env.dev`. Make sure you don't commit your secret environment variables anywhere!
5. Build and run the Docker Image!
   ```sh
   docker-compose -f docker-compose.dev.yaml up --build
   ```

You should now be able to access the homepage at [localhost:8000/](http://localhost:8000/), and sign in using the `ADMIN_USERNAME` and `ADMIN_PASSWORD` you defined. The homepage takes a minute or two to load, so be patient!

If you make any changes to the backend settings, you might need to restart the Docker container.

#### :mag: Before Committing

1. Run tests
   ```sh
   chmod +x ./scripts/run-tests-docker.sh  && ./scripts/run-tests-docker.sh
   ```
2. Check the python code style
   ```sh
   chmod +x ./scripts/run-codestyle-docker.sh  && ./scripts/run-codestyle-docker.sh
   ```

#### Local Development Env variables

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
    <td>True</td>
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
    <td>development</td>
    <td></td>
  </tr>
  <tr>
    <td>VITE_API_URL</td>
    <td>"http://localhost:8000/"</td>
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
