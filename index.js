const app = "I don't do much.";
const token = '6054bc59a21e122'

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(console.log(json));
