import ApiDocMdx from "@theme/ApiDocMdx";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useSpecData from '@theme/useSpecData';

# Check customer access

Returns a [`customer_access`](./customer-object#customer-access-response) response.

Checks whether a customer has access to a specific feature or enough usage in their plan to register an event. This is useful if you want to gate access to certain features in your app based on usage.

A `Check Customer Access` call requires

- `customer_id` the id you defined in your backend for the corresponding customer and the same id that you passed into Lotus when creating the customer

AND EITHER

- `feature_name` name of the feature you want to check access for.

OR

- `event_name` name of the event you want to check access for. In the backend we'll check whether any of the plan components associated with the event have surpassed their limit.
- `event_limit_type` the type of limit you want to check. Pass in `free` to check if the customer has access to free units, or `total` to see if the customer has access to the event_name at all.

<Tabs>
<TabItem value="js" label="Node">

```jsx
lotus.checkCustomerAccess(
  customer_id: "cust_0569173e-e665-4369",
  event_name: 'api_call',
  event_limit_type: 'free',
)

lotus.checkCustomerAccess(
  customer_id: "cust_0569173e-e665-4369",
  feature_name:'slack_integration',
)
```

</TabItem>
<TabItem value="py" label="Python">

```python
lotus.check_customer_access(
  customer_id= "cust_0569173e-e665-4369",
  event_name='api_call',
  event_limit_type='free'
)

lotus.check_customer_access(
  customer_id= "cust_0569173e-e665-4369",
  feature_name='slack_integration',
)
```

</TabItem>
<TabItem value="ts" label="Typescript">

```jsx
lotus.getCustomerAccess({
  customerId: "cust_0569173e-e665-4369",
  eventName: "api_call",
  eventLimitType: "free",
});

lotus.getCustomerAccess({
  customerId: "cust_0569173e-e665-4369",
  featureName: "slack_integration",
});
```

</TabItem>
</Tabs>

## API Spec

<ApiDocMdx id="customer_access" />
