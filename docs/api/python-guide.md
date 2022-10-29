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

## Event Tracking

### Track Event

Track event is the most common call you'll make. It's used to capture any event that happens in your app that you want to bill over eventually.
You can track absolutely anything, and with the extensible and customizable properties field, you can add as much information as you want.

A `track_event` call requires

- `event_name` should correspond to what the event is and match what you define in your metrics.
- `customer_id` the id you defined in your backend for the corresponding customer and the same id that you passed into Lotus when creating the customer

Optionally you can submit

- `properties`, which can be a dict with any information you'd like to add. In your metrics you can define properties to filer or aggregate over.
- `idempotency_id` is a unique identifier for the specific event being passed in. Passing in a unique id allows Lotus to make sure no double counting occurs. If you don't pass in an idempotency_id, we will generate one for you using UUID4.

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

## Customer Management

### Get All Customers

To get all the customers associated with your organization, use the `get_all_customers` call. This call returns a list of customers, each with the following fields:

- `customer_id`
- `customer_name`
- `balance`, the number of dollars of credit the user has.

```python
lotus.get_all_customers()
```

### Get Customer Detail

The `get_customer_detail` call returns the details of a specific customer. This call returns a customer object with the following fields:

- `customer_id`
- `customer_name`
- `total_revenue_due`, the total amount of revenue due for the customer
- `email`
- `balance`, the number of dollars of credit the user has.
- `invoices`, a list of invoice objects associated with the customer.
- `subscriptions`, a list of subscription objects associated with the customer.

```python
lotus.get_customer_detail(
  customer_id='cust_0569173e-e665-4369'
)
```

### Create Customer

To let Lotus know that you have a new customer, simply use the create customer method.

A `create_customer` call requires

- `customer_id` which uniquely identifies your customer in your backend. This is the same id you'll pass into `track_event` calls to identify the customer, in addition to other calls, so make sure it's available to you.
- `name` a name for your customer

Optionally you can submit

- `balance` the number of dollars of credit the user has. Can be useful in case you want to give your customers a certain amount of spend for free.

```python
lotus.create_customer(
    customer_id='cust_0569173e-e665-4369',
    name='Corporation Inc.',
    balance=500
)
```

The most obvious place to make this call is whenever a user signs up, or when they update their information.

<!-- ### Get Current Usage

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

```python
lotus.get_current_usage(
    customer_id='customer_id',
)
``` -->

## Subscription + Plan Management

### Get All Subscriptions

To get all the active subscriptions associated with your organization, use the `get_all_subscriptions` call. This call returns a list of subscription objects.

```python
lotus.get_all_subscriptions()
```

### Get Plans

To get the current plans associated with your organization, use the `get_all_plans` call. This call returns a list of plan objects.

For example:

```python
lotus.get_all_plans()
```

### Create Subscription

A subscription associates one of your customers with one of your billing plans.

A `create_subscription` call requires

- `customer_id` which uniquely identifies your customer in your backend. This is the same id you'll pass into `track_event` calls to identify the customer, in addition to other calls, so make sure it's available to you.
- `plan_id` which uniquely identifies your plan in your backend. You can find the plan id in the plan page in Lotus.
- `start_date` the date the subscription starts. This should be a string in YYYY-MM-DD format of the date in UTC time.

Optionally you can submit:

- `end_date` the date the subscription ends. This should be a string in YYYY-MM-DD format of the date in UTC time. If you don't set it (recommended), we will use the information in the billing plan to automatically calculate this.
- `subscription_id` a unique identifier for the subscription. If you don't pass in a subscription_id, we will generate one for you. You will need the subscription_id to update or cancel the subscription. You can either store it yourself or look for it in the subscriptions page in the Lotus app.
- `is_new` a boolean indicating whether this is a new subscription or an existing subscription that you're updating/renewing. If you don't pass in this field, we will assume it's a new subscription.
- `auto-renew` a boolean indicating whether the subscription should auto-renew. If you don't pass in this field, we will assume it's true.

For example:

```python
lotus.create_subscription(
  customer_id='cust_0569173e-e665-4369',
  plan_id='premium_plan_7ui9op',
  start_date='2020-01-01',
  subscription_id='cust_0569_p_7ui9op_2020-01-01'
)
```

### Cancel Subscription

Cancels a subscription. You can modify the behavior of the cancellation based on teh arguments passed to the call.

A `cancel_subscription` call requires

- `subscription_id` the unique ID of the subscription you want to cancel. You can find the subscription uid in the subscription page in Lotus.

Additionally, you must submit:

- `turn_off_auto_renew` a boolean indicating whether the subscription auto-renewal should be turned off. A common cancellation mechanism is to continue billing for the current period, but not renew the subscription.

OR

- `replace_immediately_type` in case you want the subscription cancelled immediately. This can take on a value of `end_current_subscription_and_bill` or `end_current_subscription_and_dont_bill`. The former will end the subscription immediately and bill the customer for the current period. The latter will end the subscription immediately and not bill the customer for the current period.

For example:

```python
lotus.cancel_subscription(
  subscription_id='subscription_4',
  turn_off_auto_renew=True
)

lotus.cancel_subscription(
  subscription_id='subscription_4',
  replace_immediately_type='end_current_subscription_and_bill'
)
```

### Get Subscription Detail

The `get_subscription_detail` call returns the details of a specific subscription. This call returns a subscription object.

```python
lotus.get_customer_detail(
  subscription_id='cust_0569173e-e665-4369'
)
```

### Change Subscription Plan

The `change_subscription_plan` call allows you to change the plan associated with a subscription. This often happens when a custoemr upgrades or downgradestheir plan. A `change_subscription_plan` call requires:

- `subscription_id` the unique ID of the subscription you want to change. You can find the subscription id in the subscription page in Lotus.
- `plan_id` the unique ID of the plan you want to change to. You can find the plan id in the plan page in Lotus.
- `replace_immediately_type` which specifies the behavior of the change. This can take on a value of `end_current_subscription_and_bill`, `end_current_subscription_and_dont_bill`, or `change_subscription_plan`. The first two options will acvtually end the subscvription and start a new one with the new plan, whereas the third option will actually mnake a mid-subscription switch.

```python
lotus.change_subscription_plan(
  subscription_id='subscription_4',
  replace_immediately_type='change_subscription_plan',
)
```

## Usage Management

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

```python
lotus.get_customer_access(
  customer_id='customer123',
  event_name='api_call',
  event_limit_type='free'
)

lotus.get_customer_access(
  customer_id='customer123',
  feature_name='slack_integration',
)
```

## Thank you

This library is largely based on the `posthog-python` package.
