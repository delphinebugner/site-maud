/* eslint-disable no-undef */
module.exports = {
  pageExtensions: ["tsx"],
  webpack: (config) => {
    config.module.rules.push(
      ...[
        {
          test: /\.yml$/,
          type: "json",
          use: "yaml-loader",
        },
        {
          test: /\.svg$/,
          use: "@svgr/webpack",
        },
        {
          test: /\.md$/,
          use: "frontmatter-markdown-loader",
        },
      ]
    );
    return config;
  },
};
