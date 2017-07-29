
const token = '7470c9d6162db8f4a1a7c2f68f068a2b6c58766e'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
