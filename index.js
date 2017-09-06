const app = "I don't do much.";


fetch('https://api.github.com/repos/jquery/jquery/commits')
  .then(res => res.json())
  .then(json => console.log(json));

const token = 'YOUR_TOKEN_HERE'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${'66b5f749b32b35f9ba0a3c50df52f6479e8bde6a'}`
  }
}).then(res => res.json()).then(json => console.log(json));