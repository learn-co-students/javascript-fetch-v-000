    

const token = '2bc6b6fa0cdc7039db203ed77f6a95cfb9c59c7a'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));