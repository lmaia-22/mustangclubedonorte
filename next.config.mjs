/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Use Sharp for image optimization
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
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
  // Enable compression
  compress: true,
  // Optimize fonts
  optimizeFonts: true,
};

export default nextConfig;
