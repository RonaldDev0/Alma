import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/'
      }
    ],
    sitemap: 'https://enterct.com//sitemap.xml',
    host: 'https://enterct.com'
  }
}