const token = '3caeafa36d7b0880f8a43226cf4e83edcace1cc1'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json))
