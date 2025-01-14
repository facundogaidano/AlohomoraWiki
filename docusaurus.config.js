// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Alohomora',
  tagline: 'Adéntrate en el mundo mágico de Alohomora',
  favicon: 'img/600.ico',

  // Set the production url of your site here
  url: 'https://facundogaidano.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/AlohomoraWiki/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facundogaidano', // Usually your GitHub org/user name.
  projectName: 'AlohomoraWiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
            admonitions: {
              keywords: [
                  'info',
                  'success',
                  'danger',
                  'note',
                  'tip',
                  'warning',
                  'important',
                  'caution',
                  'golden',
              ],
          },
          routeBasePath: '/wiki', // Set this value to '/'
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: false,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    ({
      // Replace with your project's social card
      image: 'img/fondoAlohomora.png',
      navbar: {
        title: null,
        logo: {
          alt: 'Alohomora Server',
          src: 'img/AlohomoraSVG.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'sidebarWiki',
            position: 'left',
            label: 'Wiki',
            to: '/wiki',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://tienda.alohomora.es',
            label: 'Tienda',
            position: 'right',
          },
          {
            href: 'https://discord.alohomora.es',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Comunidad',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.alohomora.es',
              },
              {
                label: 'X / Twitter',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Alohomora Server. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

export default config;
