const app = "I don't do much.";
const token = 'a5fbc58f6464c8817be9d2248f2a5f0514bd5091'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
