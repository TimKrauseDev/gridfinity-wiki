import type * as Preset from '@docusaurus/preset-classic';
import { PresetConfig } from '@docusaurus/types';
import { DeepPartial } from 'utility-types';


const config: DeepPartial<PresetConfig[]> = [
    [
      'classic',
      {
        docs: {
          sidebarPath: 'src/config/docusaurus/sidebars.ts',
          editUrl: 'https://github.com/TimKrauseDev/gridfinity-wiki/edit/main/',
          routeBasePath: '/parts-library'
        },
        theme: {
          customCss: './src/styles/custom.scss',
        },
        gtag: {
          trackingID: 'G-H3PLLF2V9P',
        },
      } satisfies Preset.Options,
    ],
];

export default config;
