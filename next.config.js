/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "@/styles/variable.scss";`,
  },
  env: {
    PORT: 3000,
  },
};

module.exports = nextConfig;
