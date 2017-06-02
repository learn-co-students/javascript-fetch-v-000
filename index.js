// github token 8d9ff7d58b37676a4b327f8b6ec0b2b3c4f01bc1
// const app = "I don't do much.";
const token = '8d9ff7d58b37676a4b327f8b6ec0b2b3c4f01bc1'
fetch("https://api.github.com/user/repos", {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
