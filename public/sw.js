// Minimum Service Worker for installable PWA
const CACHE_NAME = 'enter-v1'

// Service Worker Installation
self.addEventListener('install', () => {
  // Force immediate activation
  self.skipWaiting()
})

// Service Worker Activation
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
  // Take control immediately
  return self.clients.claim()
})

// Intercepting requests - network first strategy
self.addEventListener('fetch', event => {
  // Only intercept GET requests
  if (event.request.method !== 'GET') {
    return
  }

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // If the answer is valid, cache it
        if (response && response.status === 200 && response.type === 'basic') {
          const responseToCache = response.clone()
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache)
          })
        }
        return response
      })
      .catch(() => {
        // If the fetch fails, try from the cache
        return caches.match(event.request)
      })
  )
})

// ---- LOCAL + PUSH NOTIFICATIONS ----

// Push notification event (when the server sends a message)
self.addEventListener('push', event => {
  const data = event.data?.json() || {}

  event.waitUntil(
    self.registration.showNotification(data.title || 'Notificación', {
      body: data.body || 'test',
      icon: data.icon || '/icon-192x192.png',
      badge: data.badge || '/icon-192x192.png',
      data
    })
  )
})

// Event when user clicks on the notification
self.addEventListener('notificationclick', event => {
  event.notification.close()

  // Open app if it's closed
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clis => {
      if (clis.length > 0) {
        return clis[0].focus()
      }
      return clients.openWindow('/')
    })
  )
})

