const app = "I don't do much.";

const token = 1541c10656dd05eec29b2c5de6edf4c6c88d0535
fetch('https://api.github.com/user/repos', {
    headers: {
        Authorization: `token ${token}`
    }
}).then(res => res.json()).then(json => console.log(json));