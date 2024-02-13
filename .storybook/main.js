/** @type { import('@storybook/vue3-webpack5').StorybookConfig } */
import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack",
    ({
        name: "@storybook/addon-styling-webpack",
        options: {
          rules: [
            {
              test: /\.(scss|css)$/,
              use: ['style-loader', 'css-loader', 'sass-loader'],
              include: path.resolve(__dirname, '../src'),
            }
          ],
          plugins: [new MiniCssExtractPlugin()],
        }
    })
  ],
  framework: {
    name: "@storybook/vue3-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
