const token = '46bae80016fa5132c2f2e5619bff66ad8c5cb244'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));