import path from "node:path";

import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../core/src/**/*.stories.@(ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  docs: {
    autodocs: "tag"
  },
  webpackFinal: async (baseConfig) => {
    baseConfig.module ??= { rules: [] };
    baseConfig.module.rules ??= [];
    baseConfig.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: [path.resolve(__dirname), path.resolve(__dirname, "../core/src")],
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [
              [require.resolve("@babel/preset-react"), { runtime: "automatic" }],
              require.resolve("@babel/preset-typescript")
            ]
          }
        }
      ]
    });

    baseConfig.resolve ??= {};
    baseConfig.resolve.extensions = Array.from(
      new Set([...(baseConfig.resolve.extensions ?? []), ".ts", ".tsx"])
    );

    return baseConfig;
  }
};

export default config;
