function buildThings () {
	var arr = [];
	let i = 0
	for(; i < 3; i++) { // Changing i to 'var' 3 3 3. Using let, 0 1 2
		arr.push(		// However putting let outside of the forloop results in 3 3 3 . 
			function () {	//Does this mean forloops have their own execution context, I guess they do, they are just functions.
				console.log(i);
			}
		);
	}
	return arr;
}

let stuff = buildThings();

stuff[0]();
stuff[1]();
stuff[2]();

//things
//more things
// git why
// git why
// git why
// please work