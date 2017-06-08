const token = 'YOUR_TOKEN_HERE' //never store in findable repo, obviously.
fetch('https://api.github.com/user/repos?per_page=50', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
