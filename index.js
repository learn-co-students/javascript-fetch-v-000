// example token for demonstration, usually in database and not public
// AUTHENTICATED FETCHING
const token = '1d5a4357c71beb7d34b917c40cbfbee3ef327d91'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
