const app = "I don't do much.";

const token = '860d3b7cd0858f9794d88ed8ec48b2704a1eef27'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
