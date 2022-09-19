// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Lotus Docs",
  tagline: "Open-Core Pricing and Billing Engine",
  url: "https://docs.uselotus.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "uselotus", // Usually your GitHub org/user name.
  projectName: "lotus", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
          ],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Lotus",
        logo: {
          alt: "Lotus Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Guide",
          },
          {
            docId: "api",
            to: "docs/api",
            label: "API Reference",
            position: "left",
          },
          {
            href: "https://github.com/uselotus/lotus",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Github",
                href: "https://github.com/uselotus/lotus",
              },
              {
                label: "Slack Community",
                href: "https://join.slack.com/t/lotus-community/shared_invite/zt-1fufuktbp-ignnw768aZgdFNlcvAOSrw",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/uselotusio",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Lotus Tech Co.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
