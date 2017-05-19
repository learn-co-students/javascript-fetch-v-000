const app = "I don't do much.";
//fetch('https://api.github.com/repos/jquery/jquery/commits')
//  .then(res => res.json())
//  .then(json => console.log(json));
//

const token = 'cb66873262fffdba0023c003ef2ee8f5996b3393'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));