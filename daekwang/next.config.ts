import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: false,
            icon: true, // SVG를 아이콘으로 처리하고 싶은 경우
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
