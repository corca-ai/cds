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
};

export default config;
