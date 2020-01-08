let person = {
	fname: 'def',
	lname: 'def',
	getFullName: function() {
		return this.fname + ' ' + this.lname;
	}
}

let somePerson = {
	fname: 'John',
	lname: 'Doe'
}
// NEVER ACTUALLY DO THIS!!!
somePerson.__proto__ = person;

console.log(somePerson.getFullName());

let jane = {
	fname: 'Jane'
}

jane.__proto__ = person;

console.log(jane.getFullName());