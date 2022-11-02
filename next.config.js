/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: "cdn.hashnode.com",
        protocol: "https",
        pathname: "/res/hashnode/image/upload/**",
      },
    ],
  },
};

module.exports = nextConfig;
