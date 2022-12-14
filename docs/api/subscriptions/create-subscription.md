import ApiDocMdx from "@theme/ApiDocMdx";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useSpecData from '@theme/useSpecData';

# Create a subscription

A subscription associates one of your customers with one of your plans.

A `Create Subscription` call requires

- `customer_id` which uniquely identifies your customer in your backend. This is the same id you'll pass into track_event calls to identify the customer, in addition to other calls, so make sure it's available to you.

- `plan_id` which uniquely identifies your plan in your backend. You can find the plan id in the plan page in Lotus or by using calling get/list plans.

- `start_date` the date the subscription starts. This should be a string in YYYY-MM-DD format of the date in UTC time.

Optionally you can submit:

- `filters`, an object that contains a `property_name` and a `value` that can link the subscription to specific events. This is especially important if you have multiple subscriptions at the same time and you want to associate usage accoringly.

  A good example of filters in action would be heroku's model of multiple apps per user. In this case, when creating the subscription you would pass

  ```jsx
  {
    filters: {
      property_name: app_name;
      value: myherokuapp3;
    }
  }
  ```

- `end_date` the date the subscription ends. This should be a string in YYYY-MM-DD format of the date in UTC time.

  We recommend you don't set this and instead we will use the information in the billing plan to automatically calculate this.

- `subscription_id` a unique identifier for the subscription. If you don't pass in a subscription_id, we will generate one for you. You will need the subscription_id to update or cancel the subscription. You can either store it yourself or look for it in the subscriptions page in the Lotus app.

- `is_new` a boolean indicating whether this is a new subscription or an existing subscription that you're updating/renewing. If you don't pass in this field, we will assume it's a new subscription.
- `auto-renew` a boolean indicating whether the subscription should auto-renew. If you don't pass in this field, we will assume it's true.

<Tabs>
<TabItem value="py" label="Python">

```python
lotus.create_subscription(
  customer_id='cust_0569173e-e665-4369',
  plan_id='premium_plan_7ui9op',
  start_date='2020-01-01',
  subscription_id='cust_0569_p_7ui9op_2020-01-01'
)
```

</TabItem>
<TabItem value="ts" label="Typescript">

```jsx
await lotus.createSubscription({
  customerId: "customer_123",
  planId: "billing_plan_5",
  startDate: "2022-02-23",
});
```

</TabItem>
</Tabs>

<ApiDocMdx id="create_subscription" />
