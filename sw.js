const CACHE = "hriday-hq-shell-v1";
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icons/hriday-icon.svg"];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key.startsWith("hriday-hq-shell-") && key !== CACHE).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(fetch(request).then(response => {
      if (response.ok) {
        const copy = response.clone();
        caches.open(CACHE).then(cache => cache.put("./index.html", copy));
      }
      return response;
    }).catch(async () => (await caches.match("./index.html")) || (await caches.match("./"))));
    return;
  }

  if ([".webmanifest", ".svg"].some(ext => url.pathname.endsWith(ext))) {
    event.respondWith(caches.match(request).then(cached => cached || fetch(request)));
  }
});