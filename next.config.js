/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "channelmyanmar.org",
      "tbi.sb-cd.com",
      "i.postimg.cc",
      "static.spankbang.com",
      "static.spankbang.com",
    ],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );
    return config;
  },
  env: {
    NEXT_APP_BASE_URL: process.env.NEXT_APP_BASE_URL,
  },
};

module.exports = nextConfig;
