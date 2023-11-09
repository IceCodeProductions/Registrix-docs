// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Registrix Docs',
  tagline: 'Live streaming is great, so is documentation',
  url: 'https://docs.registrix.co',
  favicon: 'img/favicon.png',

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  organizationName: 'icecodeproductions', // Usually your GitHub org/user name.
  projectName: 'Registrix-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag:{
          trackingID: 'GTM-NK3KMZM',
          anonymizeIP: false,
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // algolia: {
      //   appId: 'YOUR_APP_ID',
      //   // Public API key: it is safe to commit it
      //   apiKey: 'YOUR_SEARCH_API_KEY',
      //   indexName: 'Registrix',
      //   contextualSearch: true,
      // },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Registrix',
        logo: {
          alt: 'Registrix Avatar',
          src: 'img/registrix-avatar-200.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://www.registrix.co/blog',
            label: 'Blog',
            position: 'right',
          },
          {
            href: 'https://qr.registrix.co',
            label: 'QR Generator',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/registrixvive',
              },
              {
                label: 'Linkedin',
                href: 'https://linkedin.com/company/registrix',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://www.registrix.co/blog',
              },
              {
                label: 'About Registrix',
                href: 'https://www.registrix.co',
              },
              {
                label: 'Registrix Vive',
                href: 'https://vive.registrix.io',
              },
              {
                label: 'QR Generator',
                href: 'https://qr.registrix.co',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/IceCodeProductions/Registrix-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Velikom International LLC.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
