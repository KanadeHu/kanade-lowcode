/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['gw.alipayobjects.com'],
  },
  pageExtensions: ['page.tsx'],
}

module.exports = nextConfig
