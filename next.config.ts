import type { NextConfig } from "next";

const NextConfig = {
  experimental: {
    serverActions: true,
  },
};

module.exports = { NextConfig, trailingSlash: false };
