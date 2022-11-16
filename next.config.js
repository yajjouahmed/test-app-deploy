/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/test-app-deploy",
  assetPrefix: "/test-app-deploy/",
};

module.exports = nextConfig;
