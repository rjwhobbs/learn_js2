const posts = [
	{title: 'Post one', body: 'body one'},
	{title: 'Post two', body: 'body two'}
];

function getPosts() {
	setTimeout(() => {
		let l = '';
		posts.forEach((post) => {
			l += `<li>${post.title}</li>`;
		});
		document.body.innerHTML = l;
		// console.log(l);
	}, 1000);
}

function createPost(post) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			posts.push(post);
			const err = false;
			if (!err) {
				resolve();
			} else {
				reject('Error: something is wrong with JS');
			}
		}, 2000);
	});
}

async function init() {
	await createPost({title: 'Post three', body: 'body three'});
	getPosts();
}

init();