import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const BASE_URL = "https://manelisim.vercel.app";
const SITEMAP_PATH = path.join(process.cwd(), "public", "sitemap.xml");

const generateSiteMap = (routes: string[]) => {
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	${routes
		.map(
			(route) => `
		<url>
		<loc>${BASE_URL}${route}</loc>
		</url>
	`,
		)
		.join("")}
</urlset>`;
	return sitemap;
};

const getAllRoutes = async () => {
	const pagesDir = path.join(process.cwd(), "src/app");
	const pageFiles = fs.readdirSync(pagesDir);

	const routes = pageFiles
		.filter(
			(file) =>
				(file.endsWith(".tsx") || file.endsWith(".js")) && !file.startsWith("components"),
		)
		.map((file) => {
			const route = file.replace(/\.tsx$|\.js$/, "");
			return route === "page" ? "/" : `/${route}`;
		});

	return routes;
};

export const POST = async () => {
	const routes = await getAllRoutes();
	const sitemap = generateSiteMap(routes);
	fs.writeFileSync(SITEMAP_PATH, sitemap);

	return NextResponse.json(
		{
			message: "Sitemap generated successfully",
			routes,
			sitemap,
		},
		{ status: 200 },
	);
};
