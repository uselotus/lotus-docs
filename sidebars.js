/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // But you can create a sidebar manually

  tutorialSidebar: [
    {
      type: "category",
      label: "Overview",
      collapsible: false, // Set the category to be collapsible
      link: { type: "doc", id: "overview/why-lotus" },
      items: ["overview/why-lotus", "overview/self-hosting"],
    },
    {
      type: "category",
      label: "Metering",
      collapsible: false,
      items: ["metering/creating-metrics", "metering/logging-events"],
    },
    {
      type: "category",
      label: "Plan Management",
      collapsible: false,
      items: [
        "plan-management/creating-plans",
        "plan-management/plan-templates",
        "plan-management/versioning",
      ],
    },
    {
      type: "category",
      label: "Subscription Lifecycle",
      collapsible: false,
      items: [
        "subscription-lifecycle/creating-subscriptions",
        "subscription-lifecycle/invoicing",
        "subscription-lifecycle/managing-access",
      ],
    },
    {
      type: "category",
      label: "Experimenting",
      collapsible: false,
      items: ["experimentation/backtests"],
    },
    {
      type: "category",
      label: "External Integrations",
      collapsible: false,
      items: ["external-integrations/stripe"],
    },
    {
      type: "category",
      label: "Extensibility",
      collapsible: false,
      items: [
        "extensibility/integrate-payment-providers",
        "extensibility/custom-metrics",
      ],
    },
    "contributing",
  ],
  apiSidebar: [
    {
      type: "category",
      items: ["api/node-guide", "api/python-guide"],
      label: "SDK Setup",
    },
    {
      type: "category",
      label: "API Overview",
      collapsible: false, // Set the category to be collapsible
      link: { type: "doc", id: "api/api" },
      items: [
        {
          type: "category",
          label: "Events",
          collapsible: true,
          link: { type: "doc", id: "api/events/tracking" },
          items: ["api/events/tracking"],
        },
        {
          type: "category",
          label: "Customers",
          collapsible: true,
          link: { type: "doc", id: "api/customers/customer-object" },
          items: [
            "api/customers/customer-object",
            "api/customers/create-customer",
            "api/customers/retrieve-customer",
            "api/customers/list-customers",
            "api/customers/get-customer-access",
          ],
        },
        {
          type: "category",
          label: "Subscriptions",
          collapsible: true,
          link: { type: "doc", id: "api/subscriptions/subscription-object" },
          items: [
            "api/subscriptions/subscription-object",
            "api/subscriptions/create-subscription",
            "api/subscriptions/retrieve-subscription",
            "api/subscriptions/cancel-subscription",
            "api/subscriptions/change-subscription-plan",
            "api/subscriptions/list-subscriptions",
          ],
        },
        {
          type: "category",
          label: "Plans",
          collapsible: true,
          link: { type: "doc", id: "api/plans/plan-object" },
          items: [
            "api/plans/plan-object",
            "api/plans/retrieve-plan",
            "api/plans/list-plans",
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
