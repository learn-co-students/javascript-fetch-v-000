const token = '6bc339e61089ed2bed16a8199cc004b2de52d90b'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
