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
        href: '/specifications',
        label: 'Specifications'
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
        title: 'Zack Freedman',
        items: [
          {
            label: 'Discord (VoidStarLabs)',
            href: 'https://discord.com/invite/voidstarlab',
          },
          {
            label: 'Twitter',
            href: 'https://twitter.com/zackfreedman',
          },
          {
            label: 'Twitch',
            href: 'https://www.twitch.tv/zackfreedman',
          },
          {
            label: 'Patreon',
            href: 'https://www.patreon.com/zackfreedman',
          },
        ],
      },
      {
        title: 'This Project',
        items: [
          {
            label: 'GitHub',
            href: 'https://github.com/TimKrauseDev/gridfinity-wiki',
          },
        ],
      },
    ],
    copyright: `Copyright © ${new Date().getFullYear()} Gridfinity Wiki.`,
  },
  prism: {
    theme: prismThemes.github,
    darkTheme: prismThemes.dracula,
  },
} satisfies Preset.ThemeConfig;

export default themeConfig;
