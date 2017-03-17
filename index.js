const app = "I don't do much.";

// creating an XHR object to request info from a resource
// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.github.com/repos/jquery/jquery/commits');
// xhr.responseType = 'json';
//
// xhr.onload = function() {
//   console.log(xhr.response);
// };
//
// xhr.onerror = function() {
//   console.log('Booo');
// };
//
// xhr.send();

// using fetch
// making a simple 'GET' request to URI for all commits
fetch('https://api.github.com/repos/jquery/jquery/commits')
  // a promise obj represents a value that may not be available yet, but will be resolve at some point in the future.
  // a promise is an obj that represents the "result" of an operation, whenever it occurs
  // all promises implement a 'then' fn that is called when the promise if "fulfilled", or completed succesfully
  // the `res.json` is saying 'give me the body of the response parsed as JSON'
  .then(res => res.json()) // 1. is getting the "response" 'res' from 'fetch()' and using the 'json()' method to turn it into JSON
  // can chain each 'then' call, and the next one receives the result of the previous on as its argument
  .then(json => console.log(json)); // 2. then it's passing the JSON to this line, to be handled by this fn
