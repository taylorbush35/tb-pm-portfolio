/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/f1',
        destination: 'https://f1-2026-calendar-theta.vercel.app/',
        permanent: false, // 302 redirect
      },
    ]
  },
}

module.exports = nextConfig
