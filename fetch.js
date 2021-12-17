/*

*/

async function fetchText() {
    let response = await fetch('/readme.txt');
    let data = await response.text();
    console.log(data);
}

/*
Fetch returns a Promise, so we can use then and catch.
*/

const URL_TO_FETCH = 'link_api';
fetch(URL_TO_FETCH, {
  method: 'get' // opcional
})
.then(function(response) {
  // use a resposta
})
.catch(function(err) { 
  console.error(err);
});

/*

*/

import fetch from 'cross-fetch';
// Or just: import 'cross-fetch/polyfill';

(async () => {
  try {
    const res = await fetch('//api.github.com/users/lquixada');

    if (res.status >= 400) {
      throw new Error("Bad response from server");
    }

    const user = await res.json();

    console.log(user);
  } catch (err) {
    console.error(err);
  }
})();
