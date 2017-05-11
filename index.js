
const token = '924529d4b0bb1b57cc210e44df74a956a958661a'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
