const app = "I don't do much.";

const token = 'b05c6cbe9fdace380cd9087b135071eaf891a0f5'

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));


/* b05c6cbe9fdace380cd9087b135071eaf891a0f5 */
