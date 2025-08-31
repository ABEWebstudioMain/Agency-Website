/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // ✅ this enables the standalone build
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

export default nextConfig;