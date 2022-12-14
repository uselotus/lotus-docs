import ApiDocMdx from "@theme/ApiDocMdx";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useSpecData from '@theme/useSpecData';

# Retrieve a subscription

Retrieves a [`subscription`](./subscription-object#subscription-object) object.

A `Retrieve Subscription` call requires

- `subscription_id`, the unique id for the subscription held in Lotus.

This call returns information about the subscription, the associated customer, and the associated plan as seen below.

<Tabs>
<TabItem value="py" label="Python">

```python
lotus.retrieve_subscription(
    subscription_id='sub_0569173e-e665-4369',
)
```

</TabItem>
<TabItem value="ts" label="Typescript">

```jsx
await lotus.getSubscriptionDetails({
  subscriptionId: "sub_0569173e-e665-4369",
});
```

</TabItem>
</Tabs>

<ApiDocMdx id="get_subscription" />
