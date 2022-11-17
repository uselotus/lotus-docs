import ApiDocMdx from "@theme/ApiDocMdx";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useSpecData from '@theme/useSpecData';

# Change subscription plan

The `Change Subscription Plan` call allows you to change the plan associated with a subscription. This often happens when a customer upgrades or downgrades their plan. A `Change Subscription Plan` call requires:

- `subscription_id` the unique ID of the subscription you want to change. You can find the subscription id in the subscription page in Lotus.
- `plan_id` the unique ID of the plan you want to change to. You can find the plan id in the plan page in Lotus.
- `replace_immediately_type` which specifies the behavior of the change. This can take on a value of:
  - `end_current_subscription_and_bill`,
  - `end_current_subscription_and_dont_bill`, or
  - `change_subscription_plan`.

The first two options will end the subscription and start a new one with the new plan, whereas the third option will make a mid-subscription switch to the new plan.

<Tabs>
<TabItem value="js" label="JavaScript">

```jsx
lotus.changeSubscriptionPlan({
  subscription_id: "subscription_123",
  plan_id: "plan_123",
  replace_immediately_type: "change_subscription_plan",
});
```

</TabItem>
<TabItem value="py" label="Python">

```python
lotus.change_subscription_plan(
  subscription_id='subscription_4',
  plan_id="plan_123",
  replace_immediately_type="end_current_subscription_and_dont_bill"
)
```

</TabItem>
</Tabs>