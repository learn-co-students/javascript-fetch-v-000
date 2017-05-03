const app = "I don't do much.";

const token = 'dab03c38a8e72938a7cdbaf0f337606e8ae6f473'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
