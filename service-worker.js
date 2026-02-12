const CACHE_NAME = "mi-libro-v1";
const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",

  "./styles/estilos.css",

  "./scripts/cover.js",
  "./stories/cuento1.js",

  "./images/page1.jpg",
  "./images/page2.jpg",
  "./images/page3.jpg",
  "./images/page4.jpg",
  "./images/page5.jpg",
  "./images/page6.jpg",
  "./images/page7.jpg",
  "./images/page8.jpg",
  "./images/page9.jpg",
  "./images/page10.jpg",

  "./images/icon-192.png",
  "./images/icon-512.png",

  "./sounds/page.mp3"
];

// Instalación: guardar archivos en caché
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// Activación: limpiar caché vieja si existe
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
});

// Interceptar peticiones
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
