---
sidebar_position: 1
---

# Why Lotus

Lotus is a powerful open-core pricing and billing engine, designed for API and SaaS companies to automate their custom usage-based pricing. Lotus will take care of your billing pipeline, and you can focus your engineering resources on what makes you special.

## How It Works

Lotus manages your billing process from metering to pricing to invocing. This software solves some of the biggest issues when building a system to handle usage-based billing, including:

- Real-time visibility of accrued revenue and usage during a billable period
- Easily creating complex modular pricing plans
- Price optimization to help with price experimentation

### Meter Usage

Define metrics that represent value in your product. A company like Mailchimp might define metrics like _email-sent_ and _new-contact_, where as a company like Vercel would define metrics like _data-egress_ and _compute_.

Once metrics are defined, Lotus integrates into you backend with a simple library that tracks events and customers, much like product analytics like Segment and Posthog. Events then stream into Lotus where they are processed and aggregate based on the defined metrics.

### Create Pricing Plans

Creating plans is as simple or complex as you desire. Lotus supports the combination of subscription and usage-based models. Each plan is composed of components that are either flat-rate subscriptions or pricing schemes based on metrics.

Attatching a customer to a plan creates a subscription that will end at a defined time.

### Invoice and Bill

Once a subscription ends, an invoice is generated with line items for every usage and flat rate cost in the plan.

You can then use the invoice to collect payment manually or use our oauth integration with the payment processor of your choosing (currently supporting Stripe).
