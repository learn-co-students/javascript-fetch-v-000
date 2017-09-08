const token = "9936186e63aadc14c95c184b344662314525e5d1"
fetch('https://api.github.com/user/repos', {
	headers: {
		Authorization: `token ${token}`
	}
}).then(res => res.json()).then(json => console.log(json));