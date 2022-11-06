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
  host: "https://api.uselotus.io/", // You can omit this line if using Lotus Cloud
});
```

## Making calls

### Track Event

Track event is the most common call you'll make. It's used to capture any event that happens in your app that you want to bill over eventually.
You can track absolutely anything, and with the extensible and customizable properties field, you can add as much information as you want.

A `track_event` call requires

- `event_name` should correspond to what the event is and match what you define in your metrics.
- `customer_id` the id you defined in your backend for the corresponding customer and the same id that you passed into Lotus when creating the customer

Optionally you can submit

- `properties`, which can be a dict with any information you'd like to add. In your metrics you can define properties to filer or aggregate over.
- `idempotency_id` is a unique identifier for the specific event being passed in. Passing in a unique id allows Lotus to make sure no double counting occurs. If you don't pass in an idempotency_id, we will generate one for you using UUID4.

For example:

```jsx
lotus.trackEvent({
  idempotency_id: "234234", //Randomly generated ID
  event_name: "test", // Event Name should match a defined billable metric
  time_created: new Date(), //time that the event occured
  customer_id: "123",
  properties: { test: "test", numericQuantity: 3.1415 }, //optional, pass in any additional properties you want to aggregate or measure
});
```

### Get Customers

To get the customers associated with the organization to which the API key belongs to, use the `get_customers` call. This call returns a list of customers, each with the following fields:

- `customer_id`
- `customer_name`
- `balance`, the number of dollars of credit the user has.

For example:

```jsx
await lotus.getCustomers();
```

### Create Customer

To let Lotus know that you have a new customer, simply use the create customer method.

A `create_customer` call requires

- `customer_id` which uniquely identifies your customer in your backend. This is the same id you'll pass into `track_event` calls to identify the customer, in addition to other calls, so make sure it's available to you.
- `customer_name` a name for your customer

Optionally you can submit

- `currency` what currency your customer is billed in. If you don't pass in a currency, we will default to USD.
- `payment_provider_id` if you are using Stripe, you can pass in the payment provider id to associate the customer with a payment method. This will allow you to charge the customer later on. If you don't pass in a payment provider id, we can still connect a customer to Stripe, but it requires the `customer_name` on Lotus to match the `name` on Stripe.

For example:

```jsx
lotus.createCustomer({
  customer_id: "123",
  customer_name: "Test Customer",
  currency: "USD", //optional
  payment_provider_id: "cus_123", //optional
});
```

The most obvious place to make this call is whenever a user signs up, or when they update their information.

### Get Current Usage

To get a snapshot of the customer's usage for currently active subscriptions, use the `get_current_usage` call. This call returns a list of subscriptions, each with the following fields:

- `cost_due`, the quantity the user owes
- `cost_due_currency`, the currency of the cost due
- `cust_connected_to_payment_provider`, whether the customer is connected to a payment provider
- `org_connected_to_cust_payment_provider`, whether the organization is connected to the customer's specified payment provider
- `line_items`, a dictionary containing information about the usage and revenue generated from each plan component
- `organization`, a dictionary with the `company_name` of the organization
- `customer`, a dictionary with the `customer_name` and `customer_id` of the customer
- `subscription`, a dictionary with the `start_date`, `end_date`, `billing_plan`, and `subscription_id` of the subscription

A `get_current_usage` call requires

- `customer_id` which uniquely identifies your customer in your backend.

For example:

```jsx
await lotus.getCurrentUsage({
  customer_id: "123",
});
```

### Get Plans

To get the current billing plans associated with the organization to which the API key belongs to, use the `get_plans` call. This call returns a list of plans objects.

For example:

```jsx
await lotus.getPlans();
```

### Get Subscriptions

To get the current subscriptions associated with the organization to which the API key belongs to, use the `get_subscriptions` call. This call returns a list of subscription objects.

For example:

```jsx
await lotus.getSubscriptions();
```

### Create Subscription

A subscription associates one of your customers with one of your billing plans.

A `create_subscription` call requires

- `customer_id` which uniquely identifies your customer in your backend. This is the same id you'll pass into `track_event` calls to identify the customer, in addition to other calls, so make sure it's available to you.
- `billing_plan_id` which uniquely identifies your billing plan in your backend. You can find the billing plan id in the billing plan page in Lotus.
- `start_date` the date the subscription starts. This should be a date string in YYYY-MM-DD format in UTC time.

Optionally you can submit:

- `end_date` the date the subscription ends. This should be a datetime string in UTC. If you don't set it (recommended), we will
  use the information in the billing plan to automatically calculate this.
- `subscription_id` a unique identifier for the subscription. If you don't pass in a subscription_id, we will generate one for you using UUID4.
  You will need the subscription_id to update or cancel the subscription. You can eeither store it yourself or look for it in the subscriptions page in the Lotus app.

For example:

```jsx
lotus.createSubscription({
  customer_id: "customer_123",
  billing_plan_id: "billing_plan_5",
  start_date: "2022-02-23",
});
```

### Cancel Subscription

Cancels a subscription. You can optionally decide whether to bill for the usage so far that period or not.

A `cancel_subscription` call requires

- `subscription_id` the unique ID of the subscription you want to cancel. You can find the subscription uid in the subscription page in Lotus.
- `bill_now` whether to bill for the usage so far that period or not. If you dont pass in a value, we will default to `True`
- `revoke_access` whether to cancel and revoke, or simply let the subscription "run out" without renewing. Keep in mind that if `bill_now` is true, then `revoke_access` must be true too.

For example:

```jsx
lotus.cancelSubscription({
  subscription_id: "subscription_123",
  bill_now: true,
  revoke_access: true,
});
```

### Get Customer Access

Checks whether a customer has access to a specific feature or enough usage in their plan to register an event. This is useful if you want to gate access to certain features in your app based on usage.

A `get_customer_access` call requires

- `customer_id` the id you defined in your backend for the corresponding customer and the same id that you passed into Lotus when creating the customer

AND EITHER

- `feature_name` name of the feature you want to check access for.

OR

- `event_name` name of the event you want to check access for. In the backend we'll check whether any of the plan components associated with the event have surpassed their limit.
- `event_limit_type` the type of limit you want to check. Pass in `free` to check if the customer has access to free units, or `total` to see if the customer has access to the event_name at all.

For example:

```jsx
await lotus.getCustomerAccess({
  customer_id: "customer_123",
  feature_name: "feature_123",
});

await lotus.getCustomerAccess({
  customer_id: "customer_123",
  event_name: "event_123",
  event_limit_type: "free",
});
```
