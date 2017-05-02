const token = '22315bf532a4a6efdda2561384ccc14bec7e834e'

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json))
