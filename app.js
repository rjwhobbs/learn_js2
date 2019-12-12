// function a() {
// 	console.log(this);
// 	this.newVar = "SPAGETTI";
// }

// a();
// console.log(newVar);

// let c = {
// 	prop: this, //in node this is an empty object but in the browser this is the window object
// 	athing: 1,
// 	func: function() {
// 		this.athing = 432;
// 		c.athing = 7987923864986234;
// 		console.log(this);
// 		let b = function(something) {
// 			this.athing = something;
// 		}
// 		b(100);
// 	}
// };

// c.func();
// a();

function test(a, b, c = 1) {
	console.log(a);
	console.log(b);
	console.log(c);
}

test(1, 2, 3);


