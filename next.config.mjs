/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['lucide-react'],
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

export default nextConfig
