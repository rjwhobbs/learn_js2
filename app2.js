function thing(otherThing) {
	return function nothing(someThing) {
			console.log(otherThing + someThing);
	}
}

let stuff = thing('one');
stuff('twoQQQ');
