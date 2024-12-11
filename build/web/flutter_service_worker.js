'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "dc8e8bd3100789eb819367b1b1e401e4",
"version.json": "4f4b0002fc1f1d7161292ce2a6453523",
"index.html": "04a5f7987d6a8f4a7bc78477c3c360ac",
"/": "04a5f7987d6a8f4a7bc78477c3c360ac",
"main.dart.js": "554e6bd35caf5fba1ea272c9065888c7",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "87ac42a8c4a945847a3b73ad827af90c",
"assets/AssetManifest.json": "16fd58b3b664f28e831a7fc70cc9a1b9",
"assets/NOTICES": "6bcd0cc91e7c8a54bc11cd2b601cf545",
"assets/FontManifest.json": "8be4eb128ac51b7d6e3207d48b910850",
"assets/AssetManifest.bin.json": "6e11acd9d8070addb38007735223c3b7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "46a13d05a9cd199a5e739a08d5fcc6d5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "cc45e04a7b6c60ada8caed46a4f44dc5",
"assets/fonts/MaterialIcons-Regular.otf": "25f783290c17deaf34a324ef4ee1a7d7",
"assets/assets/images/story-i-logo.png": "23f37ef21662dcf38b37bf208167378e",
"assets/assets/images/hpip.avif": "9a6609c448ad186ec96715804f2c253a",
"assets/assets/images/erafone-logo.jpg": "9c580ab41004cc48af69b08019a966ec",
"assets/assets/images/ur-logo.png": "1af6d5f2c876f7c15c937576afac3fd1",
"assets/assets/images/hello-logo.webp": "0e1d633a981e547c2e3b9d7409ad561f",
"assets/assets/images/rectangle_9921.jpeg": "1792a7b111a661daea05688556b1f109",
"assets/assets/images/splash1.avif": "f569b46d9db62cb3b1c36d6b7d46d08d",
"assets/assets/images/arang.avif": "f569b46d9db62cb3b1c36d6b7d46d08d",
"assets/assets/images/Coeurdes%2520Alpes.png": "afdf2565a572d702b4e6f298491b58df",
"assets/assets/images/ip.jpg": "4b021087809bed2b8cb8dabb0c1691ef",
"assets/assets/images/splash.avif": "0814a94fc5762662ffdc2788379c077f",
"assets/assets/images/digimap-logo.jpg": "0475fe6ed9c3dc18905a4cba4dabc03f",
"assets/assets/images/ip1.jpg": "0296e4ff4e8dfef860b8bb56d9d7940d",
"assets/assets/images/rectangle_9922.png": "5a48676e6c0f7fddc5d99b4b5cf07be1",
"assets/assets/images/splash-image.avif": "29433894d41be49fa2eb7b44b2b166be",
"assets/assets/images/rumah.avif": "e5bffe2f04fa6af6929ab93163c9c0cc",
"assets/assets/images/ibox-logo.png": "da6ac424280c20ef14dbfb452b793982",
"assets/assets/images/Alley%2520Palace.png": "8d1792ca0824598bbe98f24b45a1ecd0",
"assets/assets/vectors/stroke_6_x2.svg": "dfcba3d35cfa48512a48658ac591fe76",
"assets/assets/vectors/vector_x2.svg": "37b27a4c920724f97db051d2da271d6b",
"assets/assets/vectors/search_x2.svg": "261d47c545984af183c13373e6e8949f",
"assets/assets/vectors/home_x2.svg": "15457c68ec3f8d589160fc58249ba17f",
"assets/assets/vectors/shape_x2.svg": "14e26cd64f959f3c4661635dd7db49cd",
"assets/assets/vectors/shape_2_x2.svg": "14e26cd64f959f3c4661635dd7db49cd",
"assets/assets/vectors/profile_x2.svg": "90a5afc9b499d205f57ddac32eecbf44",
"assets/assets/vectors/vector_235_x2.svg": "ee8f7a51595db465c23479e305359ced",
"assets/assets/vectors/swm_icons_duotone_location_1_x2.svg": "c16269aae083b6c7c1482cdc350f2f1e",
"assets/assets/vectors/vector_3_x2.svg": "6aa79eeaafd96bb2343803935516864a",
"assets/assets/vectors/vector_1_x2.svg": "6f21fce33fd3834d8d258babd660582f",
"assets/assets/vectors/star_x2.svg": "868cb73cc9c7f0f29a54ac2ad515cb24",
"assets/assets/vectors/star_1_x2.svg": "8dec66f6412ee32059502f2012442a3e",
"assets/assets/vectors/stroke_7_x2.svg": "42e1f4cc982201f2e29ef7286b56645b",
"assets/assets/vectors/vector_4_x2.svg": "8ac41ebb0e94786a8717e7bedafdb253",
"assets/assets/vectors/heart_x2.svg": "38be3f301cf483da554d47d80dc81c85",
"assets/assets/vectors/heart_1_x2.svg": "9da837ce7aedc12ffbbcfde255802f9f",
"assets/assets/vectors/stroke_11_x2.svg": "a626250f3a9252e5edc997389f1bccbf",
"assets/assets/vectors/stroke_1_x2.svg": "71c3339532a44bea5ecdb22701aa7389",
"assets/assets/vectors/vector_2_x2.svg": "19466a0179c27671692c1a09ac472850",
"assets/assets/vectors/arrow_right_x2.svg": "f366513cd93027828cb469b56bf715b9",
"assets/assets/vectors/container_x2.svg": "4cb5cae6d16cc91da8180f083a65bd25",
"assets/assets/vectors/stroke_3_x2.svg": "1da27878da5d8bde22c056c88b27a20e",
"assets/assets/fonts/Hiatus.ttf": "a190e1df4002881bbc6e438921a589d6",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
