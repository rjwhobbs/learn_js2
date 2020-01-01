// While in browsers the global scope is the window object, 
// in nodeJS the global scope of a module is the module 
// itself, so when you define a variable in the global 
// scope of your nodeJS module, it will be local to this module.



function Rectangle(a, b) {
    this.length = a;
    this.width = b;
    this.perimeter = 2 * (a + b);
	this.area = a * b;
	console.log(this);
}

const rec = new Rectangle(1, 2);
console.log(rec.length);
console.log(rec.width);
console.log(rec.perimeter);
console.log(rec.area);

Rectangle(5, 5);