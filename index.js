const app = "I don't do much.";


fetch('https://api.github.com/user/repos').
  then(res => res.json()).
  then(json => console.log(json))

  const token = '2ff6092bbb41fba98a853557cebcddbcf81d8d3e'
  fetch('https://api.github.com/user/repos', {
 	headers: {
    Authorization: `token ${token}`
  	}
  }).then(res => res.json()).then(json => console.log(json));