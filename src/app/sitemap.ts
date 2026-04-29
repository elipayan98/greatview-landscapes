import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://greatviewlandscapes.com'
  const now = new Date()

  return [
    // Main pages
    { url: baseUrl, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/landscaping`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/irrigation`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/special-projects`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/portfolio`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/services-overview`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },

    // City landing pages
    { url: `${baseUrl}/san-antonio-landscaping`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/new-braunfels-landscaping`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/boerne-landscaping`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/schertz-landscaping`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/cibolo-landscaping`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/helotes-landscaping`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // Blog
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/blog/hoa-landscaping-budget-planning`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/blog/when-to-winterize-irrigation-san-antonio`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/blog/saws-water-restrictions-guide`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },

    // Resources
    { url: `${baseUrl}/resources/saws-rebates`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Spanish pages
    { url: `${baseUrl}/es`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/es/jardineria`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/es/irrigacion`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/es/proyectos-especiales`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/es/nosotros`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/es/contacto`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ]
}
