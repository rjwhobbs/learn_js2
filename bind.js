let person = {
	firstName: "John",
	lastName: "Doe",
	getFullName: function() {
		return this.firstName + ' ' + this.lastName;
	}
}

let logPerson = function (l1, l2) {
	console.log(this.getFullName());
	console.log(l1 + ' ' + l2);
}.bind(person);

logPerson("things", "morethings");
