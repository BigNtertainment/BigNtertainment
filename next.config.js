/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: true,
	},
	images: {
		domains: ["www.notion.so", "img.itch.zone", "cdn.sanity.io"],
	},
};

module.exports = nextConfig;
