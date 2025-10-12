/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        sanity: {
          test: /[\\/]node_modules[\\/]sanity[\\/]/,
          name: "sanity",
          priority: 10,
        },
      };
    }
    return config;
  },
};

export default nextConfig;
