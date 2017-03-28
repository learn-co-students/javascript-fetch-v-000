const token = 'eb7f291adf6843c39e22a313fa28dae5462ad1ba'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
