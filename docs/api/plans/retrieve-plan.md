import ApiDocMdx from "@theme/ApiDocMdx";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useSpecData from '@theme/useSpecData';

# Retrieve a plan

Retrieves a [`plan_detail`](./plan-object#plan-detail-object) object.

A `Retrieve Plan` call requires

- `plan_id` the plan id

<Tabs>
<TabItem value="py" label="Python">

```python
lotus.retrieve_plan(
    plan_id='plan_0569173e-e665-4369',
)
```

</TabItem>

<TabItem value="ts" label="Typescript">

```jsx
await lotus.retrievePlan({
  planId: "plan_0569173e-e665-4369", // required
}); // Will return a promise
```

</TabItem>
</Tabs>

<ApiDocMdx id="get_plan" />
