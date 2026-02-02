/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: '/WordMaster',
  assetPrefix: '/WordMaster/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
