import ApiDocMdx from "@theme/ApiDocMdx";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useSpecData from '@theme/useSpecData';

# Retrieve a plan

Retrieves a [`plan_detail`](./plan-object#plan-detail-object) object.

A `Retrieve Plan` call requires

- `plan_id` the plan id

<Tabs>
<TabItem value="js" label="JavaScript">

```jsx
lotus.retrievePlan({
  plan_id: "plan_0569173e-e665-4369",
});
```

</TabItem>
<TabItem value="py" label="Python">

```python
lotus.retrieve_plan(
    plan_id='plan_0569173e-e665-4369',
)
```

</TabItem>
</Tabs>
