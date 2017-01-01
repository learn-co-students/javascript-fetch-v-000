const app = "I don't do much.";

const token = '8d36a66a88e84954fc881b446084ef81e2eb73c0'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));
