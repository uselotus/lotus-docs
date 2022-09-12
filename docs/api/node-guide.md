---
sidebar_position: 1
---

# Node.js Library

## Installing

Install the lotus-node package for use in your backend.

```bash npm2yarn
npm install lotus-node
```

## Initializing

```jsx
const lotus = new Lotus(api_key, {
  host: "https://www.uselotus.app/", // You can omit this line if using Lotus Cloud
});
```

## Tracking Events

Sending usage events to Lotus is as easy as inputing a line of code in your backend for each event you want to track.

```jsx
lotus.trackEvent({
  idempotencyId: "234234", //Randomly generated ID
  eventName: "test", // Event Name should match a defined billable metric
  timeCreated: new Date(), //time that the event occured
  customerId: "123",
  properties: { test: "test", numericQuantity: 3.1415 }, //optional, pass in any additional properties you want to aggregate or measure
});
```

## Creating Customers

In order to stay in sync with your application, Lotus must create a customer when a new customer signs up. Use the appropriate library to create a customer with the same customer id that you store internally in your backend.

```jsx title="Create Customer"
customer_id = "234261234";
customer_name = "Jane Doe";

lotus.createCustomer(customer_id, customer_name);
```
