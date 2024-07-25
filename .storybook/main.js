import tsconfigPaths from 'vite-tsconfig-paths';
import { mergeConfig } from 'vite';

/**
 * @type {import('@storybook/react-vite').StorybookConfig} StorybookConfig
 */
const config = {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  stories: ['../**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-storysource',
    '@storybook/addon-designs',
  ],

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },

  docs: {},
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [tsconfigPaths()],
    });
  },
};

export default config;
