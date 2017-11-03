const token = 'd62e16da11bf6bfa5533806a64c8c95bd093407e'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));