import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: "/studio/",
		},
		sitemap: "https://big-ntertainment-nu.vercel.app/sitemap.xml",
	};
}
