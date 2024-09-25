/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mustangclubedonorte.pt',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.mustangclubedonorte.pt',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
