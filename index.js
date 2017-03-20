const app = "I don't do much.";
const token = //redacted
fetch('https://api.github.com/repos/user/repos',
{
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));