const C='eroide-shell-1',F=['./','index.html','manifest.webmanifest','icon-180.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F))));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(u.origin!==location.origin)return;
e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
