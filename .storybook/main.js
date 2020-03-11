const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.[tj]s'],
    addons: [
        '@storybook/addon-links/register',
        {
          name: '@storybook/addon-storysource',
          options: {
            rule: {
              // test: [/\.stories\.jsx?$/], This is default
              include: [path.resolve(__dirname, '../src')], // You can specify directories
            },
            loaderOptions: {
              prettierConfig: { printWidth: 80, singleQuote: false },
            },
          },
        },
        {
            name: '@storybook/addon-docs',
            options: {
              configureJSX: true,
            },
        },
        '@storybook/addon-actions',
        //'@storybook/addon-storysource',
        //'@storybook/addon-a11y',
      ],
};