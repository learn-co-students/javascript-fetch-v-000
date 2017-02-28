const app = "I don't do much.";

const token = '8c36a0cf7d2b21b45c599e825485d8737186b6ac'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json))

// 8c36a0cf7d2b21b45c599e825485d8737186b6ac