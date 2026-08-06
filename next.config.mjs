/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: fontFallback(),
};

function fontFallback() {
  return true;
}

export default nextConfig;
