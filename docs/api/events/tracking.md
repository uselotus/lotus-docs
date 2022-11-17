---
sidebar_position: 1
---

import ApiDocMdx from "@theme/ApiDocMdx";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Tracking

Tracking is one of the most common operations you'll make in Lotus. It's used to capture any event that happens in your app that you want to bill over eventually.

You can track absolutely anything, and with the extensible and customizable properties field, you can add as much information as you want.

A `Track Event` call requires

- `event_name` should correspond to what the event is and match what you define in your metrics.
- `customer_id` the id you defined in your backend for the corresponding customer and the same id that you passed into Lotus when creating the customer

Optionally you can submit

- `properties`, which can be a dict with any information you'd like to add. In your metrics you can define properties to filer or aggregate over.
- `idempotency_id` is a unique identifier for the specific event being passed in. Passing in a unique id allows Lotus to make sure no double counting occurs. If you don't pass in an idempotency_id, we will generate one for you using UUID4.
- `time_created` is the time that the event occured. If you don't pass in a time_created, we will use the time that the event was sent by the Lotus SDK.

<Tabs>
<TabItem value="js" label="JavaScript">

```jsx
lotus.trackEvent({
  event_name: "test", // Event Name should match a defined billable metric
  time_created: new Date(), //time that the event occured
  customer_id: "cust_58947673-64aa-4e64",
  properties: { test: "test", numericQuantity: 3.1415 }, //optional, pass in any additional properties you want to aggregate or measure
  idempotency_id: "c2c5eb5d-de4b-44e0", //Randomly generated ID
});
```

</TabItem>
<TabItem value="py" label="Python">

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

</TabItem>
</Tabs>