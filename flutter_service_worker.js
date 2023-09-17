'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "85cde84297990ca8ecab753be4e6494f",
"splash/img/light-2x.png": "1863bb813307699577d952c762e018be",
"splash/img/dark-4x.png": "74af3c2d109b2790ef4eccb7a9db7d4c",
"splash/img/light-3x.png": "7fba0a96ec6dcd65ccb0364b8fd0ec20",
"splash/img/dark-3x.png": "7fba0a96ec6dcd65ccb0364b8fd0ec20",
"splash/img/light-background.png": "d60b94b29b1025fcdf3d2c78e0c73279",
"splash/img/light-4x.png": "74af3c2d109b2790ef4eccb7a9db7d4c",
"splash/img/dark-2x.png": "1863bb813307699577d952c762e018be",
"splash/img/dark-1x.png": "acf529cda1ab97e75e1283cf842fcf6d",
"splash/img/light-1x.png": "acf529cda1ab97e75e1283cf842fcf6d",
"index.html": "b6fca42014257d8a9d76a8e1bb7f87a0",
"/": "b6fca42014257d8a9d76a8e1bb7f87a0",
"main.dart.js": "20e8afccc07666d1d1bd1cc170523ba2",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8ed2496f8f27536d02e2223291acce0f",
"assets/AssetManifest.json": "b3fe21e536e140deb0fd1f31a255c7f4",
"assets/NOTICES": "b6a1701eeeaa9e5c8a437b3b5e9cb060",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e167f05354de838eb8e12cf4fc62a3f3",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "a02a688e8c02c415b1256bcf239649de",
"assets/fonts/MaterialIcons-Regular.otf": "2dd99a9f9b5a1262784a0598d397e03f",
"assets/Assets/close_drawer.png": "47944e2e6843c3057de960ecba4136db",
"assets/Assets/email.png": "3989e15c7a3fcb476a816416611066b7",
"assets/Assets/down_arrow.png": "3c2555d3a3f36163af97775d4795d0f6",
"assets/Assets/arrowdowncircle.png": "94133357e5bcde3204f818d63ccbcece",
"assets/Assets/starempty.png": "1220db59a2d9024b57edc68f1b793b97",
"assets/Assets/profile_frame.png": "413ddfbac580c5a9747029b57e5c963c",
"assets/Assets/shape1.png": "5ee18eed4bc9e017ff678cbc12817dee",
"assets/Assets/wallet.png": "9f304b3de96e5c141041c3cc6a438569",
"assets/Assets/shape2.png": "c1c7defdaf35c70dd8c1a229c2e8d618",
"assets/Assets/starfull.png": "1e693f85d07b89440a93ee8a518e188e",
"assets/Assets/login_bg.png": "9cc031ba2e1e56ff70f3493d533327ad",
"assets/Assets/qrcode.png": "7f110aec9599e1940a64a0144b23c756",
"assets/Assets/gallerypick.png": "4cc3706901a34a13cc2075f06f30ced9",
"assets/Assets/terms.png": "4ecf0cbc4ef6ce235af0e227efffdd38",
"assets/Assets/lock.png": "9f0534d589f895abbf7295e79ed0eae3",
"assets/Assets/empty_wallet.png": "816aff1df2da206c69eeb7ce17912f8d",
"assets/Assets/arrowdown.png": "0656e8f3b38e5f3ed80478288facea4a",
"assets/Assets/right_arrow.png": "c9d90d40dfaac4d0db15792f9a5a9abb",
"assets/Assets/starhalf.png": "860c710eff7b48e2f1d3fe1f98a44565",
"assets/Assets/register_bg_2.png": "48dff9ad920841c7624701d151c6703e",
"assets/Assets/show.png": "ff73608e1c5bf9fd742e5a74692fc17c",
"assets/Assets/change_pw.png": "5f6a54dc0420ccf3db25bc948c3b417d",
"assets/Assets/logout.png": "bc9734ee95ded43044deaf38ea955c58",
"assets/Assets/bg_mask.png": "a49ec950831e9dd619351816f0d4f1a4",
"assets/Assets/home.png": "dfd2a8fb50dec71e623fc702d396fabe",
"assets/Assets/drawar_shape1.png": "b0c6ee564d85d82639536c1391a8ff02",
"assets/Assets/section.png": "2f1f32a950be7b6947b606f0d032aff3",
"assets/Assets/appbar.png": "2c776cea3b8764efecaec0c348f98713",
"assets/Assets/edit_profile.png": "7d3795e6fc526ddea7fc1424b737c254",
"assets/Assets/about_us.png": "b65125ce56a1ba8e531f46ebb9c43c77",
"assets/Assets/shape.png": "2d4155d8c01ad49390631026cc17a908",
"assets/Assets/search.png": "c5527d93fe68f9b5e8c801d715a2d43b",
"assets/Assets/splashnew.png": "d60b94b29b1025fcdf3d2c78e0c73279",
"assets/Assets/qr_scanner.png": "aeebc9e46410c57cc51b74d02d8d6a97",
"assets/Assets/splash.jpg": "7abf8cc250c15a490ac43083c894dd0f",
"assets/Assets/profile_grey.png": "48b3b1dc9e1ab20654c5e3aefeb8848d",
"assets/Assets/menu.png": "5fd0dc309a09435e5ab799eb9608d009",
"assets/Assets/mantor_logo.png": "b8eec84950d41fe973fe5af76ab47ac6",
"assets/Assets/point_fill.png": "3cd6419b7655acc00a0e1c2ab8d7f3c0",
"assets/Assets/ngo.png": "2906d3e64dbe0d1cbb1290b33c64d6e5",
"assets/Assets/add_res_fill.png": "d9b58e16e790600e4979a28d6a5c24bc",
"assets/Assets/add_res.png": "b921f788fd84c6f1c9b1fef5ca66652c",
"assets/Assets/arrowup.png": "77b2ff93f022b7597a676282b3afd20a",
"assets/Assets/qr_scanner2.png": "d0be3c1bb7b86c3a15732edbc201f807",
"assets/Assets/calendar.png": "7bb959da0c446d76eddfd95cbdd90a44",
"assets/Assets/refer.png": "1c98373cb9a114078cf5a02360f68395",
"assets/Assets/rewerd_bg.png": "3efe6858e5436417e79d3c73723266da",
"assets/Assets/profile.png": "c8aa823d659e04375f8f8c33bc357485",
"assets/Assets/appbarbg.png": "4d665de7fc1404727b891e9db6dc57b7",
"assets/Assets/call_gray.png": "30c099bfe19ce6b8a5b977cd84e156c0",
"assets/Assets/eye.png": "364f56c98ee04de5d33f36e91b8803e7",
"assets/Assets/splash_givers.jpg": "0535cb317a0413377ede9a8ff9152f8c",
"assets/Assets/call.png": "604e65b0956863864150a1b9b16fee89",
"assets/Assets/profile_fill.png": "a70898d43f236659442343fdfbbb99ff",
"assets/Assets/delete.png": "17193e2a0015c5eff39fad1486dea2a2",
"assets/Assets/frame.png": "0d1ba245dd0913baffa47088bd75334e",
"assets/Assets/reg_bg_1.png": "a11dce8c843f5cc29aca18651efaed49",
"assets/Assets/first_bg.png": "286a8059042f6295b7d39c57293c958f",
"assets/Assets/card_edit.png": "e06b53dfb46580921153cba1b22c5d90",
"assets/Assets/dashboard_logo.png": "c14b3a428ea99eda906d74c8c3b1aaed",
"assets/Assets/neddy_logo.png": "fce4909088308dca62bdf5b8345af106",
"assets/Assets/home_fill.png": "543e502bfeaa14925df2cb141e1e85c4",
"assets/Assets/reg_bg_2.png": "0c8ec43a89df5fa355daf3199125dcbb",
"assets/Assets/web_logo.png": "8013a927a5b006ff0f9b690d16a099b7",
"assets/Assets/celebrate.png": "c7e34e52cf000c407bdf13967effaaf4",
"assets/Assets/refer_bg.png": "3fda6b1e212ec9ab8a332729ca7b739b",
"assets/Assets/back.png": "51237a231664486f0e8c0ea362c169d7",
"assets/Assets/hide.png": "c3990cb1e5b4e1e8279fbd93042b3f23",
"assets/Assets/closeblack.png": "15d534f78218e230c8b79942bd9b23e3",
"assets/Assets/bg.png": "2d3b14b0c3407e1fd535bce593e39d5c",
"assets/Assets/close.png": "45ab72723db346feaa3ecf022ebf14ea",
"assets/Assets/closesquare.png": "788882ba9f3cc0ae08a906de1c7611cd",
"assets/Assets/example.png": "08eb45e6098451ae744711c287f644ff",
"assets/Assets/register_bg.png": "18179c597196c77b7fee0c71f9228688",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
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
