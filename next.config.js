// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//     domains: ['fakestoreapi.com'],
//   },
// };

// export default nextConfig;
const { withNetlify } = require('@netlify/next');

module.exports = withNetlify({
  reactStrictMode: true,
});
