export default function sitemap() {
  const baseUrl = "https://portfolio-ibtesam-taha.vercel.app";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date().toISOString(),
    },
  ];
}