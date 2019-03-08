'use strict';

fetch('./files/towndata.json')
    .then(function(resp) {
      return resp.json();
    })
    .then(function(data) {
      Console.log(data);
    });
    Ok, tell us about Fetch y'all.Yes, I did some reading, but I think I need a better understanding of some of the terms that get thrown around 'service worker, promises, polyfill, etc.'I will read this stuff at some point more intently. In the meantime, can anyone help sum it up and make navigating this rabbit hole a bit easier?Key questions: where do I install the api? which api is the best? Does anyone here have experience to share[real world]? (caveats?)https://github.com/github/fetchhttps://developers.google.com/web/updates/2015/03/introduction-to-fetchhttps://flaviocopes.com/fetch-api/https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetchhttps://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-dataIt's probably all there. 