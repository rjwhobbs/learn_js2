let person = {
	firstName: "John",
	lastName: "Doe",
	getFullName: function() {
		return this.firstName + ' ' + this.lastName;
	}
}

let person2 = {
	firstName: 'Jane',
	lastName: 'Doe'
}

// let logPerson = function (l1, l2) {
// 	console.log(this.getFullName());
// 	console.log(l1 + ' ' + l2);
// }.bind(person);
let logPerson = function (l1, l2) {
	console.log(this.getFullName());
	console.log(l1 + ' ' + l2);
}

// bind copies and call executes, apply accepts an array

let test = logPerson.call(person, "things", "morethings"); // The call method will decide what 'this' refers to
//console.log(test);
logPerson.apply(person, ['meh', 'bla']);

console.log(person.getFullName.apply(person2));

// function currying

function mult(a, b) {
	return a * b;
}

let mult2 = mult.bind(this, 2);
console.log(mult2(1));