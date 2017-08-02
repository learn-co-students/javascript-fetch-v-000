const app = "I don't do much.";
const token ="a930a5829004743e468c47e9360d8cbbdff183ab"
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
