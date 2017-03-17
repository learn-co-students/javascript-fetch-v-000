const token = 'MY_TOKEN_HERE'

// passing the desired headers as part of a second options argument to 'fetch'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
// all promises implement a 'then' fn that is called when the promise if "fulfilled", or completed succesfully
// the `res.json` is saying 'give me the body of the response parsed as JSON'
  .then(res => res.json())
  .then(json => console.log(json))
