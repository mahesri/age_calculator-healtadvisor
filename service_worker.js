self.addEventListener("install",e=>{
  e.waitUntil(
    caches.open("static").then(cache=>{
      return cache.addAll(["./",'./images/logo192.png']);
    })
  );
});

// Fatch resources
self.addEventListener("fetch",e=>{
  e.respondWith(
    caches.match(e.request).then(response=>{
      return response||fetch(e.request);
    })
  );
});