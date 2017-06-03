const app = "I don't do much.";

const token = 'c0a9f9fbae26478a2c1705271f8202f8ddeb83a0'
fetch('https://api.github.com/jwolfe890/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));