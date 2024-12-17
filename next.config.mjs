/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/diametriclabs',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
