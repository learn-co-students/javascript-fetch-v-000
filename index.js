const app = "I don't do much.";

//
// fetch('https://api.github.com/repos/jquery/jquery/commits')
//   .then(res => res.json())
//   .then(json => console.log(json));
//

//throws an error
  // fetch('https://api.github.com/user/repos').
  //   then(res => res.json()).
  //   then(json => console.log(json))

//github token
// 42cd560972c2392ee608bf9baacc5bbace16b15e

    const token = '42cd560972c2392ee608bf9baacc5bbace16b15e'
    fetch('https://api.github.com/user/repos', {
      headers: {
        Authorization: `token ${token}`
      }
    }).then(res => res.json()).then(json => console.log(json));
