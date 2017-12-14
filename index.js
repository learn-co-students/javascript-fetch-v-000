const app = "I don't do much.";

const token = '0e2a0f851fa94377227465e7745eca36daf1e1aa'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
 }
}).then(res => res.json()).then(json => console.log(json));
