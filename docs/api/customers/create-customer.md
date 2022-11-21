import ApiDocMdx from "@theme/ApiDocMdx";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useSpecData from '@theme/useSpecData';

# Create a customer

A `Create Customer` call requires

- `customer_id` which uniquely identifies your customer in your backend. This is the same id you'll pass into `track_event` calls to identify the customer, in addition to other calls, so make sure it's available to you.
- `name` (optional) a name for your customer
- `email` an email for your customer
- `payment_provider` (optional), choices are ["stripe"]
- `payment_provider_id` (optional) associated id for your customers payment provider
- `properties` (optional) any additional metadata related to your customer

<!-- Optionally you can submit

- `balance` the number of dollars of credit the user has. Can be useful in case you want to give your customers a certain amount of spend for free. -->

<Tabs>
<TabItem value="js" label="Node">

```jsx
lotus.createCustomer({
  customer_id: "123",
  email: "email@email.com",
  customer_name: "Test Customer",
  payment_provider: "stripe",
  payment_provider_id: "23423",
  properties: {},
});
```

</TabItem>
<TabItem value="py" label="Python">

```python
lotus.create_customer(
    customer_id='cust_0569173e-e665-4369',
    name='Corporation Inc.',
)
```

</TabItem>
<TabItem value="ts" label="Typescript">

```jsx
lotus.createCustomer({
  customer_id: "123",
  email: "email@email.com",
  customer_name: "Test Customer",
  payment_provider: "stripe",
  payment_provider_id: "23423",
  properties: {},
});
```

</TabItem>
</Tabs>
