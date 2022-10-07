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
    "intro",
    "self-hosting",
    {
      type: "category",
      label: "Guides",
      items: [
        "guide/create-billable-metrics",
        "guide/create-pricing-plans",
        "guide/ingesting-usage-events",
      ],
    },
    {
      type: "category",
      label: "Extensibility",
      items: [
        "extensibility/integrate-payment-providers",
      ],
    },
    "contributing",
  ],
  apiSidebar: [
    "api",
    {
      type: "category",
      items: ["api/node-guide", "api/python-guide"],
      label: "SDKs",
    },
  ],
};

module.exports = sidebars;
