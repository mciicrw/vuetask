"use strict";var precacheConfig=[["index.html","dead2898963b79b1aeb3c17f8c612ec7"],["service-worker.js","cfcfc871702c43a4745f8e13e18ff390"],["static/css/app.03f73635b5da2b3292ddb2a2c568dedf.css","114e1ea21be421a386abfbfb0804d2ad"],["static/fonts/Roboto-Black.313a656.woff","313a65630d341645c13e4f2a0364381d"],["static/fonts/Roboto-Black.59eb360.woff2","59eb3601394dd87f30f82433fb39dd94"],["static/fonts/Roboto-BlackItalic.cc2fadc.woff","cc2fadc3928f2f223418887111947b40"],["static/fonts/Roboto-BlackItalic.f75569f.woff2","f75569f8a5fab0893fa712d8c0d9c3fe"],["static/fonts/Roboto-Bold.50d75e4.woff","50d75e48e0a3ddab1dd15d6bfb9d3700"],["static/fonts/Roboto-Bold.b52fac2.woff2","b52fac2bb93c5858f3f2675e4b52e1de"],["static/fonts/Roboto-BoldItalic.4fe0f73.woff","4fe0f73cc919ba2b7a3c36e4540d725c"],["static/fonts/Roboto-BoldItalic.94008e6.woff2","94008e69aaf05da75c0bbf8f8bb0db41"],["static/fonts/Roboto-Light.c73eb1c.woff","c73eb1ceba3321a80a0aff13ad373cb4"],["static/fonts/Roboto-Light.d26871e.woff2","d26871e8149b5759f814fd3c7a4f784b"],["static/fonts/Roboto-LightItalic.13efe6c.woff","13efe6cbc10b97144a28310ebdeda594"],["static/fonts/Roboto-LightItalic.e8eaae9.woff2","e8eaae902c3a4dacb9a5062667e10576"],["static/fonts/Roboto-Medium.1d65948.woff","1d6594826615607f6dc860bb49258acb"],["static/fonts/Roboto-Medium.90d1676.woff2","90d1676003d9c28c04994c18bfd8b558"],["static/fonts/Roboto-MediumItalic.13ec0eb.woff2","13ec0eb5bdb821ff4930237d7c9f943f"],["static/fonts/Roboto-MediumItalic.83e114c.woff","83e114c316fcc3f23f524ec3e1c65984"],["static/fonts/Roboto-Regular.35b07eb.woff","35b07eb2f8711ae08d1f58c043880930"],["static/fonts/Roboto-Regular.73f0a88.woff2","73f0a88bbca1bec19fb1303c689d04c6"],["static/fonts/Roboto-RegularItalic.4357beb.woff2","4357beb823a5f8d65c260f045d9e019a"],["static/fonts/Roboto-RegularItalic.f5902d5.woff","f5902d5ef961717ed263902fc429e6ae"],["static/fonts/Roboto-Thin.ad538a6.woff2","ad538a69b0e8615ed0419c4529344ffc"],["static/fonts/Roboto-Thin.d3b4737.woff","d3b47375afd904983d9be8d6e239a949"],["static/fonts/Roboto-ThinItalic.5b4a33e.woff2","5b4a33e176ff736a74f0ca2dd9e6b396"],["static/fonts/Roboto-ThinItalic.8a96edb.woff","8a96edbbcd9a6991d79371aed0b0288e"],["static/fonts/fontawesome-webfont.674f50d.eot","674f50d287a8c48dc19ba404d20fe713"],["static/fonts/fontawesome-webfont.af7ae50.woff2","af7ae505a9eed503f8b8e6982036873e"],["static/fonts/fontawesome-webfont.b06871f.ttf","b06871f281fee6b241d60582ae9369b9"],["static/fonts/fontawesome-webfont.fee66e7.woff","fee66e712a8a08eef5805a46892932ad"],["static/img/fontawesome-webfont.912ec66.svg","912ec66d7572ff821749319396470bde"],["static/img/icons/safari-pinned-tab.svg","f22d501a35a87d9f21701cb031f6ea17"],["static/js/app.ffb9b68bd8a571128340.js","28db11116cb12d9f81335412b596b589"],["static/js/manifest.ae163638279581327fe9.js","3fdd45d7eb92806527f6679febae5197"],["static/js/vendor.ab340584ca55e1500843.js","fb1556f6fd45887ef934f5aac9268e99"]],cacheName="sw-precache-v3-vuetask-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,f){var o=new URL(e);return f&&o.pathname.match(f)||(o.search+=(o.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),o.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],f=new URL(t,self.location),o=createCacheKey(f,hashParamName,a,!1);return[f.toString(),o]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var f=new Request(a,{credentials:"same-origin"});return fetch(f).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));0,t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});