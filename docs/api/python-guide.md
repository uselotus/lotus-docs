---
sidebar_position: 2
---

# Python Library

Official Lotus Python library to capture and send events to any Lotus instance (self-hosted or cloud).

This library uses an internal queue to make calls non-blocking and fast. It also batches requests and flushes asynchronously, making it perfect to use in any part of your web app or other server side application that needs performance.

## Installation 

```bash
pip install lotus-python
```

First grab a new api key from the Settings tab. Then change the host to wherever you want to send data to and omit the line if you are using Lotus Cloud.

Make sure to import the lotus library and set your api key **before** making any calls.

```python
import lotus
lotus.api_key = 'YOUR API KEY'
lotus.host = 'https://your-lotus-instance.com'
```

To debug, you can set debug mode.
```python
lotus.debug = True
```

## Making calls

### Track Event

Track event is the most common call you'll make. It's used to capture any event that happens in your app that you want to bill over eventually.
You can track absolutely anything, and with the extensible and customizable properties field, you can add as much information as you want.

A `track_event` call requires
 - `event_name` should correspond to what the event is and match what you define in your metrics.
 - `customer_id`  the id you defined in your backend for the corresponding customer and the same id that you passed into Lotus when creating the customer

Optionally you can submit
- `properties`, which can be a dict with any information you'd like to add.  In your metrics you can define properties to filer or aggregate over.
 - `idempotency_id` is a unique identifier for the specific event being passed in. Passing in a unique id allows Lotus to make sure no double counting occurs. If you don't pass in an idempotency_id, we will generate one for you using UUID4.

For example:
```python
lotus.track_event(
  customer_id='customer123', 
  event_name='api_call', 
  properties={
      'region': 'US', 
      'mb_used': 150
    }
  idemptotency_id='c9799bf9-e5c9-4007-8d10-0663d045d23c'
)
```

### Create Customer
To let Lotus know that you have a new customer, simply use the create customer method. 

A `create_customer` call requires
- `customer_id` which uniquely identifies your customer in your backend. This is the same id you'll pass into `track_event` calls to identify the customer, in addition to other calls, so make sure it's available to you.
- `name` a name for your customer

Optionally you can submit
- `currency` what currency your customer is billed in. If you don't pass in a currency, we will default to USD.
- `payment_provider_id` if you are using Stripe, you can pass in the payment provider id to associate the customer with a payment method. This will allow you to charge the customer later on. If you don't pass in a payment provider id, we can still connect a customer to Stripe, but it requires
the `name` on Lotus to match the `name` on Stripe.

For example:
```python
lotus.create_customer(
    customer_id='customer_id',
    name='Corporation Inc.',
    currency='USD'
)
```

The most obvious place to make this call is whenever a user signs up, or when they update their information.

### Create Subscription

A subscription associates one of your custoemrs with one of your billing plans.

A `create_subscription` call requires
- `customer_id` which uniquely identifies your customer in your backend. This is the same id you'll pass into `track_event` calls to identify the customer, in addition to other calls, so make sure it's available to you.
- `billing_plan_id` which uniquely identifies your billing plan in your backend. You can find the billing plan id in the billing plan page in Lotus.
- `start_date` the date the subscription starts. This should be a datetime string in UTC.

Optionally you can submit:
- `end_date` the date the subscription ends. This should be a datetime string in UTC. If you don't set it (recommended), we will 
use the information in the billing plan to automatically calculate this.
- `subscription_uid` a unique identifier for the subscription. If you don't pass in a subscription_uid, we will generate one for you using UUID4.
You will need the subscription_uid to update or cancel the subscription. You can eeither store it yourself or look for it in the subscriptions page in the Lotus app.

For example:
```python
lotus.create_subscription(
  customer_id='customer_1', 
  billing_plan_id='billing_plan_5',
  start_date='2020-01-01T00:00:00Z',
  subscription_uid='cust1_bp_5_2020-01-01'
)
```

### Cancel Subscription

Cancels a subscription. You can optionally decide whether to bill for the usage so far that period or not.

A `cancel_subscription` call requires
- `subscription_uid` the unique ID of the subscription you want to cancel. You can find the subscription uid in the subscription page in Lotus.
- `bill_now` whether to bill for the usage so far that period or not. If you don't pass in a value, we will default to `True`.

For example:
```python
lotus.cancel_subscription(
  subscription_uid='subscription_4', 
  bill_now='True'
)
```

## Thank you

This library is largely based on the `posthog-python` package.