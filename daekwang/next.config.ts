import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      rules: [
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        },
      ],
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true, // SVG를 아이콘으로 처리하고 싶은 경우
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
