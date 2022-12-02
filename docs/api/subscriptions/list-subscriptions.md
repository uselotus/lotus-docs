import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useSpecData from '@theme/useSpecData';

# List all subscriptions

Retrieves an array of [`subscription`](./subscription-object#subscription-object) objects.

If you need to see the subscriptions of a specific customer you can use [Retrieve Customer](/docs/api/customers/retrieve-customer)

<Tabs>
<TabItem value="py" label="Python">

```python
lotus.list_subscriptions()
```

</TabItem>
<TabItem value="ts" label="Typescript">

```jsx
await lotus.getAllSubscriptions();
```

</TabItem>
</Tabs>

<ApiDocMdx id="get_subscriptions" />
