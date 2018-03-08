const app = "I don't do much.";

const token = "SECRET"
fetch('https://api.github.com/fachastorm/repos', {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => console.log(json));