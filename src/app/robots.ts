import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/home',
          '/profile',
          '/config-list',
          '/login',
          '/signup',
          '/forgot-password',
          '/reset-password',
          '/auth/',
          '/api/'
        ]
      }
    ],
    sitemap: 'https://enterct.com/sitemap.xml',
    host: 'https://enterct.com'
  }
}