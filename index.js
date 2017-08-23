// Generate a token at the github site with the 'repo' scope and use it to authorize access to the API
const token =''
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));


