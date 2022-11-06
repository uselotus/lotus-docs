import ApiDocMdx from "@theme/ApiDocMdx";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useSpecData from '@theme/useSpecData';

# Create a customer

A `Create Customer` call requires

- `customer_id` which uniquely identifies your customer in your backend. This is the same id you'll pass into `track_event` calls to identify the customer, in addition to other calls, so make sure it's available to you.
- `name` a name for your customer

<!-- Optionally you can submit

- `balance` the number of dollars of credit the user has. Can be useful in case you want to give your customers a certain amount of spend for free. -->

<Tabs>
<TabItem value="js" label="JavaScript">

```jsx
lotus.createCustomer({
  customer_id: "123",
  customer_name: "Test Customer",
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
</Tabs>
