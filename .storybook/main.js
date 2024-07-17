module.exports = {
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
