import ApiDocMdx from "@theme/ApiDocMdx";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useSpecData from '@theme/useSpecData';

# Retrieve a subscription

Retrieves a [`subscription`](./subscription-object#subscription-object) object.

A `Retrieve Subscription` call requires

- `subscription_id`

<Tabs>
<TabItem value="js" label="Node">

```jsx
lotus.retrieveSubscription({
  subscription_id: "sub_0569173e-e665-4369",
});
```

</TabItem>
<TabItem value="py" label="Python">

```python
lotus.retrieve_subscription(
    subscription_id='sub_0569173e-e665-4369',
)
```

</TabItem>
<TabItem value="ts" label="Typescript">

```jsx
lotus.getSubscriptionDetails({
  subscriptionId: "sub_0569173e-e665-4369",
});
```

</TabItem>
</Tabs>

<ApiDocMdx id="get_subscription" />
