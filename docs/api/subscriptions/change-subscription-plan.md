import ApiDocMdx from "@theme/ApiDocMdx";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useSpecData from '@theme/useSpecData';

# Change subscription plan

The `Change Subscription Plan` call allows you to change the plan associated with a subscription.

This often happens when a customer upgrades or downgrades their plan.

A `Change Subscription Plan` call requires:

- `subscription_id` the unique ID of the subscription you want to change. You can find the subscription id in the subscription page in Lotus.

- `plan_id` the unique ID of the plan you want to change to. You can find the plan id in the plan page in Lotus.
- `replace_immediately_type` which specifies the behavior of the change. This can take on a value of:

  - `end_current_subscription_and_bill`, ends subscription with current plan, issues an invoice and starts a new subscription with the new plan

  - `end_current_subscription_and_dont_bill`,ends subscriptions with current plan, doesn't bill and starts a new subscription with the new plan

  - `change_subscription_plan`, switches the plan seamlessly without invoices, will invoice on same schedule

<Tabs>
<TabItem value="py" label="Python">

```python
lotus.change_subscription_plan(
  subscription_id='subscription_4',
  plan_id="plan_123",
  replace_immediately_type="end_current_subscription_and_dont_bill"
)
```

</TabItem>

<TabItem value="ts" label="Typescript">

```jsx
await lotus.changeSubscription({
  subscriptionId: "subscription_123",
  planId: "plan_123",
  replaceImmediatelyType: "change_subscription_plan",
});
```

</TabItem>
</Tabs>

<ApiDocMdx id="update_subscription" />
