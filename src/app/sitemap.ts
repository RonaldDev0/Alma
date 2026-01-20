import { MetadataRoute } from 'next'

const siteUrl = 'https://enterct.com/'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/',
    '/information',
    '/list',
    '/products',
    '/home',
    '/profile',
    '/config-list',
    '/forgot-password',
    '/login',
    '/reset-password',
    '/signup'
  ]

  return routes.map(route => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly'
  }))
}