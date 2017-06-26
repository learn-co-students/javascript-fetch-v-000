const token = 'ef815d60d5e80e5f26fcd38c7aa54b89c45231e8'
fetch('https://api.github.com/user/repos', {
    headers: {
        Authorization: `token ${token}`
    }
}).then(res => res.json()).then(json => console.log(json));