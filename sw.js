const CACHE_NAME = "devref-v2";

// Все локальные файлы для офлайн-работы
const STATIC_ASSETS = [
  "/DevRef/",
  "/DevRef/index.html",
  "/DevRef/css/style.css",
  "/DevRef/js/app.js",
  "/DevRef/js/data-html.js",
  "/DevRef/js/data-css.js",
  "/DevRef/icon.png",
  "/DevRef/icon-512.png",
  "/DevRef/manifest.json"
];

// Установка: кэшируем все локальные файлы
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Активация: удаляем старые кэши
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch: Cache First для локальных файлов, Network First для внешних
self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);

  // Локальные файлы — отдаём из кэша, если есть
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        }).catch(() => caches.match("/DevRef/index.html"));
      })
    );
  } else {
    // Внешние ресурсы (шрифты, иконки) — сначала кэш, потом сеть
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        }).catch(() => new Response("", { status: 503 }));
      })
    );
  }
});
