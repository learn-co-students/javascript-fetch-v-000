const app = "I don't do much.";

const token = 'b57b8ed4f0ed381874775cd60b9a333e61144d1e'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));