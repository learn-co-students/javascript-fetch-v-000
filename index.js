const app = "I don't do much.";

const token = "9f3e97ef6dfabd82993a488a0a525eb990891d21"
fetch("https://api.github.com/user/repos", {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json))
