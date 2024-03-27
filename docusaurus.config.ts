import type {Config} from '@docusaurus/types';
import {
  i18n,
  plugins,
  presets,
  themeConfig
} from './src/config/docusaurus'

const config: Config = {
  title: 'Gridfinity Wiki',
  tagline: 'The modular, open-source grid storage system for your workshop',
  favicon: 'img/favicon.ico',

  url: 'https://gridfinity.wiki/',
  baseUrl: '/',
  organizationName: 'TimKrauseDev', // Usually your GitHub org/user name.
  projectName: 'gridfinity-wiki', // Usually your repo name.
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n,
  plugins,
  presets,
  themeConfig,
};

export default config;
