const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui"],
  output: "export",
  webpack(config) {
    config.resolve.alias['@public'] = path.resolve(__dirname, '../../public');
    return config;
  },
};

export default nextConfig;