let person = {
	fname: 'def',
	lname: 'def',
	getFullName: function() {
		return this.fname + ' ' + this.lname;
	}
}

let john = {
	fname: 'John',
	lname: 'Doe'
}
// NEVER ACTUALLY DO THIS!!!
john.__proto__ = person;

for (prop in john) {
	console.log(prop + ': ' + john[prop]);
}

console.log(john.getFullName());

let jane = {
	fname: 'Jane'
}

jane.__proto__ = person;

console.log(jane.getFullName());

let str = "word";

// reflecting on the object
for (prop in john) {
	if (john.hasOwnProperty(prop)) {
		console.log(prop + ": " + john[prop]);
	}
}