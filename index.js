const app = "I don't do much.";

const token = '323eb8a4a35192bb67a977362ab846d5c0bedb2e'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json))
