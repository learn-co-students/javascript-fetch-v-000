// Generate a token at the github site with the 'repo' scope and use it to authorize access to the API
const token = '69d7eaeb5439fa303a429c542b4f28a992d72eea'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));


