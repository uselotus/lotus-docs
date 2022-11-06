---
sidebar_position: 1
---

# Create Pricing Plans

Plans are the instructions that assign prices to your products and usage metrics. Create a new plan for every flat recurring fee you want to include in your pricing.

Plans are composed of a few base features and additional **Plan Components**.

To define a plan you must define these fields:

<p>

- An <b>interval</b> of either <code>weekly</code>, <code>monthly</code>, or <code>yearly</code>. This defines the length billing cycle for when customers on the plan will get invoiced.

- A <b>name</b>.

- A <b> flat recurring fee</b>.

- A <b> description </b> (optional)

- <b> Plan Components </b> (optional). These are how we associate variable charges based on metrics to plans. Think of these as extra line items on an invoice.

</p>

Currently, each customer can only be on one plan, i.e only has one subscription.

## Plan Components

Plan components associate billable metrics or feature access to a given plan.
