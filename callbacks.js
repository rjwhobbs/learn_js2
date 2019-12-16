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
	setTimeout(() => {
		posts.push(post);
		console.log(posts);
	}, 2000);
}

createPost({title: 'Post three', body: 'body three'});
getPosts();