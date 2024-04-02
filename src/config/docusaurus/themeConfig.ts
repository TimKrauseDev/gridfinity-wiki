import {themes as prismThemes} from 'prism-react-renderer';
import type * as Preset from '@docusaurus/preset-classic';
import { ThemeConfig } from '@docusaurus/types';

const themeConfig: ThemeConfig = {
  image: 'img/docusaurus-social-card.jpg',
  colorMode: {
    defaultMode: 'dark',
    disableSwitch: true,
    respectPrefersColorScheme: false,
  },
  navbar: {
    title: 'Gridfinity Wiki',
    logo: {
      alt: 'Gridfinity Wiki',
      src: 'img/logo.svg',
    },
    items: [
      {
        type: 'docSidebar',
        sidebarId: 'docSidebar',
        position: 'left',
        label: 'Parts Library',
      },
      {
        href: 'https://github.com/TimKrauseDev/gridfinity-wiki',
        label: 'GitHub',
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
            label: 'Stack Overflow',
            href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          },
          {
            label: 'Discord',
            href: 'https://discordapp.com/invite/docusaurus',
          },
          {
            label: 'Twitter',
            href: 'https://twitter.com/docusaurus',
          },
        ],
      },
      {
        title: 'More',
        items: [
          {
            label: 'Blog',
            to: '/blog',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/facebook/docusaurus',
          },
        ],
      },
    ],
    copyright: `Copyright © ${new Date().getFullYear()} Gridfinity Wiki. Built with Docusaurus.`,
  },
  prism: {
    theme: prismThemes.github,
    darkTheme: prismThemes.dracula,
  },
} satisfies Preset.ThemeConfig;

export default themeConfig;
