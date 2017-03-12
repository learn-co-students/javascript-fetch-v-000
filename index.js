const token = '9e19d321320f67f717fd7d08f69c81e42def454a'

fetch('https://api.github.com/user/repos', { headers: { Authorization: `token ${token}` }})
    .then(res => res.json())
    .then(json => console.log(json));