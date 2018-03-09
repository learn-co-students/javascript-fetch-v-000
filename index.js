const app = "I don't do much.";

const token = "ADD YOUR TOKEN HERE";

fetch("https://api.github.com/users/repos", {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(response => response.json())
  .then(json => console.log(json));