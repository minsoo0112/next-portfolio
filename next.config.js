/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.notion.so',
      's3.us-west-2.amazonaws.com',
      's3.amazonaws.com',
      'images.unsplash.com',
      'next-portfolio-minsoo7044.vercel.app'
    ]
  }
}

module.exports = nextConfig
