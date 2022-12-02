import ApiDocMdx from "@theme/ApiDocMdx";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useSpecData from '@theme/useSpecData';

# Retrieve a customer

Retrieves a [`customer_detail`](./customer-object#customer-detail-object) object.

A `Retrieve Customer` call requires

- `customer_id` the id you defined in your backend for the corresponding customer and the same id that you passed into Lotus when creating the customer

<Tabs>
<TabItem value="py" label="Python">

```python
lotus.retrieve_customer(
    customer_id='cust_0569173e-e665-4369',
)
```

</TabItem>
<TabItem value="ts" label="Typescript">

```jsx
await lotus.getCustomerDetail({
  customerId: "cust_0569173e-e665-4369",
});
```

The response includes all information about the customer and also the current subscription they are on. The full spec is in the [`customer_detail`](./customer-object#customer-detail-object) but some specifically useful properties that are return in this object are:

- `total_amount_due`
- `default_currency`, contains the code, name, and symbol of the currency that the customer will be charged with

</TabItem>
</Tabs>

## API Spec

<ApiDocMdx id="get_customer" />
