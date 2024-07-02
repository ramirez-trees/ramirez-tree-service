module.exports = {
  siteUrl: "https://ramireztreeserviceandlandscaping.com",
  generateRobotsTxt: true,
  exclude: ["/dashboard/*", "/api/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/dashboard/", "/api/"],
        allow: "/",
      },
    ],
    additionalSitemaps: [
      "https://ramireztreeserviceandlandscaping.com/sitemap.xml",
    ],
  },
};
