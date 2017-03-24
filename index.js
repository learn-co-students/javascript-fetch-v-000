const app = "I don't do much.";

const token = "5b2d3555771765490d04f8080e927abd132f6d15"

function goGetIt() {
  fetch('https://api.github.com/user/repos', {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => console.log(json));  
}
