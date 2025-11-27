// Service Worker mínimo para PWA instalable
const CACHE_NAME = 'enter-v1'

// Instalación del Service Worker
self.addEventListener('install', () => {
  // Forzar activación inmediata
  self.skipWaiting()
})

// Activación del Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
  // Tomar control inmediatamente
  return self.clients.claim()
})

// Interceptar peticiones - estrategia network first
self.addEventListener('fetch', (event) => {
  // Solo interceptar peticiones GET
  if (event.request.method !== 'GET') {
    return
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Si la respuesta es válida, cachearla
        if (response && response.status === 200 && response.type === 'basic') {
          const responseToCache = response.clone()
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache)
          })
        }
        return response
      })
      .catch(() => {
        // Si falla el fetch, intentar desde cache
        return caches.match(event.request)
      })
  )
})
