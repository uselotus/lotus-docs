---
sidebar_position: 1
---

# Node.js Library

## Installing

Install the lotus-node package for use in your node.js based backend.

```bash npm2yarn
npm install lotus-node
```

## Initializing

First grab a new api key from the Settings tab. Then change the host to wherever you want to send data to and omit the line if you are using Lotus Cloud.

```jsx
const lotus = new Lotus(api_key, {
  host: "https://www.uselotus.app/", // You can omit this line if using Lotus Cloud
});
```

## Tracking Events

Sending usage events to Lotus is as easy as inputing a line of code in your backend for each event you want to track.

```jsx
lotus.trackEvent({
  idempotency_id: "234234", //Randomly generated ID
  event_name: "test", // Event Name should match a defined billable metric
  time_created: new Date(), //time that the event occured
  customer_id: "123",
  properties: { test: "test", numericQuantity: 3.1415 }, //optional, pass in any additional properties you want to aggregate or measure
});
```

## Creating Customers

In order to stay in sync with your application, Lotus must create a customer when a new customer signs up. Use the appropriate library to create a customer with the same customer id that you store internally in your backend.

```jsx title="Create Customer"
customer_id = "234261234";
name = "Jane Doe";

lotus.createCustomer(customer_id, name);
```

## Creating Subscriptions

In order to add a plan to a customer, or switch the customer's current plan, programatically create a subscription, usually after a user has submitted their credit card info or signed up for a new plan.

Subscriptions renew automatically, so you only attatch a plan to a customer once.

```jsx title="Create Subscription"
customer_id = "234261234";
billing_plan_id = "Starter Plan";

start_date = "07/22/2022"; //optional

lotus.createSubscription(customer_id, billing_plan_id, start_date);
```

## Cancelling Subscriptions

```jsx title="Cancel Subscription"
subscription_uid = "234261234";


lotus.cancelSubscription(
  subscription_uid=subscription_uid, 
  bill_now=true,
  revoke_access=true
)
```

## Get Customer Access

```jsx title="Get Customer Access"
customer_id = "234261234";

//only pass in one of the two
event_name = "test";
feature_name = "slack_integration";

lotus.getCustomerAccess(customer_id, event_name=event_name);

lotus.getCustomerAccess(customer_id, feature_name=event_name);
```