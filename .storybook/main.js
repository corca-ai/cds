module.exports = {
  framework: "@storybook/react-vite",
  stories: ["../src/stories/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-storysource",
    "@storybook/addon-designs",
  ],
  core: {
    builder: "@storybook/builder-vite",
  },
};
