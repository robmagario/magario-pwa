// Set this to true for production
var doCache = true;
var CACHE_NAME = 'my-pwa-cache-v1';
var urlsToCache = [
    '/',
    '/src/App.css',
    '/about',
    '/contact',
    '/portfolio',
];
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                // Open a cache and cache our files
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
