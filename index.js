
const token = 'eadb7d5fb1fca4cef7632d91581d2411ef14d699'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));


// fetch('https://api.github.com/user/repos')
//   .then(res => res.json())
//   .then(json => console.log(json));



// fetch('https://api.github.com/repos/jquery/jquery/commits')
//   .then(res => res.json())
//   .then(json => console.log(json));



// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.github.com/repos/jquery/jquery/commits');
// xhr.responseType = 'json';
 
// xhr.onload = function() {
//    console.log(xhr.response);
// };
 
// xhr.onerror = function() {
//   console.log('Booo');
// };
 
// xhr.send();