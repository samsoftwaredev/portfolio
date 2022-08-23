/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  target: "serverless",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "@/styles/variable.scss";`,
  },
  env: {
    PORT: 3000,
  },
};

module.exports = nextConfig;
