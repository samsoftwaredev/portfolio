/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "@/styles/variable.scss";`,
  },
  images: {
    domains: ["ogeronimo.github.io", "miro.medium.com"],
  },
};

module.exports = nextConfig;
