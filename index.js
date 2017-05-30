const app = "I don't do much.";


const token = 'dc50a8b6de464c356f73b159610fed21a71f3901'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
