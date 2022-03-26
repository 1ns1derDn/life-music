/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      loader: "@svgr/webpack",
      issuer: /\.[jt]sx$/,
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: "preset-default",
              removeViewBox: false
            }
          ]
        },
        titleProp: true
      },
      test: /\.svg$/
    });

    return config;
  },
  experimental: {
    outputStandalone: true
  }
};

module.exports = nextConfig;
