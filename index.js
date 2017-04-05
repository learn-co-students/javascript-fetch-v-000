const token = '37014dc8f95610facb3ea861525505d94631b614';

fetch('https://api.github.com/user/repos', {
  headers: {
    authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json))
