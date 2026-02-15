/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "res.cloudinary.com", // 외부 이미지 로딩시 보안 설정
            }
        ]
    }
};

export default nextConfig;
