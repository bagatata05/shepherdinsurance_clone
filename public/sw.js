// Empty service worker to resolve 404 errors from cached/previous registrations
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  self.clients.claim();
});
