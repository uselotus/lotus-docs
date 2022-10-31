---
sidebar_position: 1
---

# Why Lotus

#### Lotus is a powerful open-core pricing and billing engine that enables SaaS companies to deploy, monitor, and experiment with custom subscriptions and complex models like usage-based pricing.

Lotus provides a flexible and modular control panel on top of your existing quote to cash stack that allows you to integrate data from multiple systems to help you figure out the optimal pricing scheme for your products.

Lotus is self-hostable and extensible, enabling companies to build their own frontend, apps, and integrations for themselves.

## How It Works

Lotus manages your billing process from metering to pricing to invoicing. This software solves some of the biggest issues when building a system to handle usage-based billing, including:

<!-- - Real-time visibility of accrued revenue and usage during a billable period -->

- Easily creating complex modular pricing plans, keeping track of versions, and assigning them to customers
- Handling complex behaviors like proration, discounts, and plan transitions
- Evaluating the effects of past pricing changes on your bottom line, and helping you understand how to optimize your pricing strategy

### Meter Usage

Define metrics that represent value in your product. A company like Mailchimp might define metrics like _email-sent_ and _new-contact_, whereas a company like Vercel would define metrics like _data-egress_ and _compute_.

Once metrics are defined, Lotus integrates into your backend with a simple library that tracks events and customers, much like product analytics like Segment and Posthog. Events then stream into Lotus where they are processed and aggregated based on the defined metrics.

### Create and Manage Pricing Plans and Subscriptions

Lotus has sensible primitives and an intuitive interface that allows you to build plans that are as complex or as simple as you want them to be. In addition to creating plans, Lotus makes it easy for you to tweak them using a versatile versioning system.

Lotus has a variety of features that make it easy for you to make your plans as expressive as possible, including predefined plan transitions, granular plan replacement and grandfathering schemes, and broad support for a sales-led monetization motion.

### Invoice and Bill

Once a subscription ends, an invoice is generated with line items for every usage and flat rate cost in the plan.

You can then use the invoice to collect payment manually or use our integration with the payment processor of your choosing (currently supporting Stripe).

### Experiment with New Pricing

We are building both analytics and predictive capabilities that enable you to not just implement but also iterate and improve on your pricing plans and deploy new pricing experiments.
