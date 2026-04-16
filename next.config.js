const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  outputFileTracingRoot: path.join(__dirname),
  images: {unoptimized : true,},

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
