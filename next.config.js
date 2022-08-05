/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.pexels.com", "source.unsplash.com", "i.pravatar.cc"],
  },
};

module.exports = nextConfig;
