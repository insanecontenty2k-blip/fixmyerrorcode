/** @type {import('next').NextConfig} */
const nextConfig = {
  // Avoid stale chunk errors during dev after large data changes
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

export default nextConfig;
