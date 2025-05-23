
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // output: 'export', // Removed to use `next export` command explicitly
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
    // When using `next export`, image optimization must be disabled or a custom loader used.
    unoptimized: true,
  },
};

export default nextConfig;
