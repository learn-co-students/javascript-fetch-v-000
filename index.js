const token = "fd769e261d28f96789d7151242acc05f8f078b9c"

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));

//fd769e261d28f96789d7151242acc05f8f078b9c
