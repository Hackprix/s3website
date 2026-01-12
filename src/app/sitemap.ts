import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://s3.hackprix.tech";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/agenda", "/humans"].map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
  return routes;
}
