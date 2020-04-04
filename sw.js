var cacheName = 'hello-pwa'

var filesToCache = [
    '/',
    '/index.html',
    '/css/style.css',
    '/js/main.js'
]

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(cacheName).then((cache)=>{
            return cache.addAll(filesToCache)
        })
    )
})

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then(()=>{
            return response || fetch(e.request)
        })
    )
})

window.onload = () => {
    'use strict'

    if('serviceWorker' in navigator) {
        navigator.serviceWorker.register('.sw.js')
    }
}