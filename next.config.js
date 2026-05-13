const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  outputFileTracingRoot: path.join(__dirname),
images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  webpack(config){
    config.module.rules.push({
     
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: [{loader: '@svgr/webpack', options: { icon: true }}],
      
      
    },
    )
    return config
  }

}

module.exports = nextConfig
