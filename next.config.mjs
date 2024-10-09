/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "*.vercel.sh",
            },
            {
                hostname: "flowbite.s3.amazonaws.com",
            },
        ],
    },
};

export default nextConfig;
