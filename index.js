const token = '760869047ff1c29982d033c65ce549b346dfeebc'
fetch('https://api.github.com/user/repos')
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
