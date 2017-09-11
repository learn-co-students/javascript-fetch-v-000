const token = 'c362114968ef0693471a7eb2ffeb6c8407400e1c'

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).
  then(res => res.json()).
  then(json => console.log(json))
