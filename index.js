const app = "I don't do much.";
// 64d38a67113cfccd337bf2bb275f2f1e8b7b73c5 token

const token = '64d38a67113cfccd337bf2bb275f2f1e8b7b73c5'

fetch('https://api.github.com/user/repos', {
	headers: {
		Authorization: `token ${token}`
	}
}).then(res => res.json()).then(json => console.log(json))