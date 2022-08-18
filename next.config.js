/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  target: "serverless",
  env: {
    PORT: 3000,
  },
};

module.exports = nextConfig;
