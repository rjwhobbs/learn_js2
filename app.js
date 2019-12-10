var person = new Object();

person['name'] = 'Zoltan';
person['description'] = 'The Great';

var nameProp = 'name';

console.log(person);
console.log(person[nameProp]);

person.address = new Object();
person.address.home = "Mars";
console.log(person);

