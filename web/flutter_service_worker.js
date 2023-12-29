'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "cc132570d6d238130e38adc59e1f998d",
"index.html": "69cc55d4002e59e7335f76f47ee920b3",
"/": "69cc55d4002e59e7335f76f47ee920b3",
"main.dart.js": "bb64c31562bf67d575e9936887ca5ef9",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "afbad595473125d9919e55440bb9d114",
"assets/images/stackIcon/tools/Git.png": "b01afb16c4d83f8d81b5ca272dd359b6",
"assets/images/stackIcon/tools/GitHub.png": "52d73b259b43f8e7507cd32e6a4ddd55",
"assets/images/stackIcon/tools/GitHub.jpeg": "24b62548b48af3e019a3c82df54758a8",
"assets/images/stackIcon/tools/WorkBench.png": "d4d19e6f9735d96239b38a4467f427e5",
"assets/images/stackIcon/framework/Flutter.png": "d21f1eecaeaab081ba7efec1721c0712",
"assets/images/stackIcon/framework/RestAPI.png": "ef21561ce0b886b73ddf451c55a5b5ff",
"assets/images/stackIcon/framework/Spring.png": "b213ea0bb0a64fffd632c82aa3f6cc25",
"assets/images/stackIcon/framework/SpringBoot.png": "8315cb308b890c7087edfc088043f572",
"assets/images/stackIcon/framework/Spring_width.png": "9859c03ffaacab070a5591b4c556a1e6",
"assets/images/stackIcon/framework/UIKit.png": "75783e91c9a46209bf819cd854cdf82d",
"assets/images/stackIcon/framework/SwiftUI.png": "5526d3e3039f7874dbdd864bdb56a5f0",
"assets/images/stackIcon/framework/MyBatis.png": "f07e3d79de1a4954fe03a731ef5f63b5",
"assets/images/stackIcon/language/Python.png": "2f6d3612c2d4ef37118892119b4c5204",
"assets/images/stackIcon/language/Java.png": "8885ce9860f3aed4c999dc1b9fb70633",
"assets/images/stackIcon/language/JS.png": "319356ec500fa715973405e17c47d19f",
"assets/images/stackIcon/language/Swift.png": "8e28fdf1a857c2d765a18e9ce7cd7951",
"assets/images/stackIcon/language/CSS.png": "594aa284c4862d5ee3766d6d0bd42547",
"assets/images/stackIcon/language/Dart.png": "dc3618d998a0e0845cd062b50416ed85",
"assets/images/stackIcon/language/HTML5.png": "fb1e7f9db2540c3194a9179094a925e2",
"assets/images/stackIcon/db/FireBase.png": "6eb24b9109dbad1c632ea9b946b5b00c",
"assets/images/stackIcon/db/MySQL.png": "6edd78fce2b2eb6d019f2046dfed2f4d",
"assets/images/stackIcon/db/SQLite.png": "99056176c73325ceea92b650b6404511",
"assets/images/stackIcon/dataAnalysis/Python.png": "2f6d3612c2d4ef37118892119b4c5204",
"assets/images/stackIcon/dataAnalysis/R.png": "dd7266c2a968bdc940b8f9bd68d22299",
"assets/images/ppt/MyBMIRec.png": "28e1a71470bf02e310b50c7e6cd86e07",
"assets/images/ppt/self_diagnosis.png": "d401a499211392324a5a77c0529c3043",
"assets/images/ppt/TravelMaker.png": "c2ff1e0996409ce44a3156afbf4d5149",
"assets/images/ppt/auction.png": "1fd471ce90b0c6b0eedd694d484f0fc2",
"assets/images/ppt/LittleP.png": "a79cfd4b572049bddb3864cc93aa2543",
"assets/images/pic.jpeg": "68f0f4a5ec40e5ea2ff0714a11541cbd",
"assets/images/Git2.png": "3c033c546056c2219ce30e2a1ac72c50",
"assets/AssetManifest.json": "b9de473e603dc2f2c2f1720f045f2f60",
"assets/NOTICES": "16ed64735838c3b6a1e446316ffbb906",
"assets/videos/2311.mp4": "02a06d5af7959771a938eae9897a9595",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "62c5441e13eafc4610f50313fbb2b1fc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "5c2a745e1ff8f34a3339bcb55ff1d368",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
