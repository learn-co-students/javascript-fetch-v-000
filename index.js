const app = "I don't do much.";

const token = '268a4bd04d94d2955d5aefa3363a2602a83374ea'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
