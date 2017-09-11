const token = '28284094de0df5b02dbc0a4d244cf5a8a64db2af'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));