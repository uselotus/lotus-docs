import ApiDocMdx from "@theme/ApiDocMdx";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useSpecData from '@theme/useSpecData';

# Retrieve a customer

Retrieves a [`customer_detail`](./customer-object#customer-detail-object) object.

A `Retrieve Customer` call requires

- `customer_id` the id you defined in your backend for the corresponding customer and the same id that you passed into Lotus when creating the customer

<Tabs>
<TabItem value="js" label="JavaScript">

```jsx
lotus.retrieveCustomer({
  customer_id: "cust_0569173e-e665-4369",
});
```

</TabItem>
<TabItem value="py" label="Python">

```python
lotus.retrieve_customer(
    customer_id='cust_0569173e-e665-4369',
)
```

</TabItem>
</Tabs>