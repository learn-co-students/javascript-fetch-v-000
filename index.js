const token = 'd33734eab4261713227e8b41b1';
fetch('https://api.github.com/user/repos', {
    headers: {
        Authorization: `token ${token}`
    }
}).then(res => res.json()).then(json => console.log(json))
