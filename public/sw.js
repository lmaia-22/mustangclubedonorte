// Service Worker for Offline Support
// Version 1.1.0

const CACHE_NAME = 'mustang-club-v1.1';
const RUNTIME_CACHE = 'mustang-club-runtime-v1.1';
const IMAGE_CACHE = 'mustang-club-images-v1.1';

// Assets to cache on install
const PRECACHE_ASSETS = [
  '/',
  '/logo_no_bk.png',
  '/favicon.ico',
  '/site.webmanifest',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png',
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Precaching static assets');
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => self.skipWaiting()) // Activate immediately
      .catch((err) => {
        console.error('[Service Worker] Installation failed:', err);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => {
              return name !== CACHE_NAME && name !== RUNTIME_CACHE && name !== IMAGE_CACHE;
            })
            .map((name) => {
              console.log('[Service Worker] Deleting old cache:', name);
              return caches.delete(name);
            })
        );
      })
      .then(() => self.clients.claim()) // Take control of all pages
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip cross-origin requests (except CDN assets if needed)
  if (url.origin !== location.origin) {
    return;
  }

  // Skip API calls, video files, and large media files
  if (
    request.url.includes('/api/') ||
    request.url.includes('/_next/data/') ||
    request.url.includes('.mp4') ||
    request.url.includes('.webm') ||
    request.url.includes('mustang.mp4')
  ) {
    return;
  }

  // Different strategies for different resource types
  if (request.destination === 'image') {
    // Images: Cache First, then Network
    event.respondWith(
      caches.match(request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return fetch(request)
            .then((response) => {
              if (response && response.status === 200) {
                const responseToCache = response.clone();
                caches.open(IMAGE_CACHE).then((cache) => {
                  cache.put(request, responseToCache);
                });
              }
              return response;
            })
            .catch(() => {
              // Return placeholder or cached logo if image fails
              return caches.match('/logo_no_bk.png');
            });
        })
    );
  } else if (request.mode === 'navigate') {
    // Pages: Network First, then Cache
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.status === 200) {
            const responseToCache = response.clone();
            caches.open(RUNTIME_CACHE).then((cache) => {
              cache.put(request, responseToCache);
            });
          }
          return response;
        })
        .catch(() => {
          // Network failed, try cache
          return caches.match(request).then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }
            // Fallback to home page
            return caches.match('/');
          });
        })
    );
  } else {
    // Other assets (CSS, JS, fonts): Cache First, fallback to Network
    event.respondWith(
      caches.match(request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return fetch(request)
            .then((response) => {
              if (response && response.status === 200) {
                const responseToCache = response.clone();
                caches.open(RUNTIME_CACHE).then((cache) => {
                  cache.put(request, responseToCache);
                });
              }
              return response;
            })
            .catch(() => {
              // Return error for failed assets
              return new Response('Resource not available offline', {
                status: 503,
                headers: { 'Content-Type': 'text/plain' },
              });
            });
        })
    );
  }
});

// Background sync for when connection is restored
self.addEventListener('sync', (event) => {
  console.log('[Service Worker] Background sync:', event.tag);
  if (event.tag === 'sync-forms') {
    event.waitUntil(syncForms());
  }
});

// Message handler for cache updates
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data && event.data.type === 'CACHE_URLS') {
    event.waitUntil(
      caches.open(RUNTIME_CACHE)
        .then((cache) => {
          return cache.addAll(event.data.payload);
        })
    );
  }
});

// Helper function for background sync
async function syncForms() {
  // Implement form sync logic here if needed
  console.log('[Service Worker] Syncing forms...');
}

