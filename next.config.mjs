/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["sanity", "@sanity/vision", "sanity-plugin-cloudinary"],
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
};

export default nextConfig;
