fetch('https://api.github.com/user/repos').
  then(res => res.json()).
  then(json => console.log(json))

const token = 'bd00c7c2e3f23c413fc9b2e5064765a5fe2973c7'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
