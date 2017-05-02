const app = "I don't do much.";

const token = '7e85de918d8b19762e1312f7c4d45193947046ac'

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json())
  .then(json => console.log(json));
