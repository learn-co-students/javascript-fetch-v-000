const app = "I don't do much.";
// 
const fake_token = 'nothteactualtokeniquiufkjkfkhj';



function fetchy() {
  fetch('https://api.github.com/user/repos', {
    headers: {
      Authorization: `token ${fake_token}`
    }
  }).then(res => res.json()).then(json => console.log(json));
}