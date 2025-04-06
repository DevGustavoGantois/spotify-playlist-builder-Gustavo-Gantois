/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'image-cdn-fa.spotifycdn.com',
      'image-cdn-ak.spotifycdn.com',
      'i.scdn.co',
      'mosaic.scdn.co', 
      'lh3.googleusercontent.com',
      'pbs.twimg.com'
    ],
  },
};

module.exports = nextConfig;