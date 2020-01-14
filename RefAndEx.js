

var person = {
	firstname: 'Default',
	lastname: 'Default',
	getFullName: function() {
		return this.firstname + ' ' + this.lastname;  
	}
}

var john = {
	firstname: 'John',
	lastname: 'Doe'
}

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person;

// for (var prop in john) {
// 	if (john.hasOwnProperty(prop)) {
// 		console.log(prop + ': ' + john[prop]);
// 	}
// }

var jane = {
	address: '111 Main St.',
	getFormalFullName: function() {
		return this.lastname + ', ' + this.firstname;   
	}
}

var jim = {
	getFirstName: function() {
		return firstname;   
	}
}

var createAssigner = function(keysFunc, defaults) {
	return function(obj) {
	  var length = arguments.length;
		if (defaults) obj = Object(obj);
		if (length < 2 || obj == null) return obj;
		for (var index = 1; index < length; index++) {
			var source = arguments[index],
				keys = keysFunc(source),
				l = keys.length;
			for (var i = 0; i < l; i++) {
				var key = keys[i];
				if (!defaults || obj[key] === void 0) obj[key] = source[key];
		}
	  }
	  return obj;
	};
};

var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');

let _ = createAssigner;
_.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };
_.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };
_.extend = createAssigner(_.allKeys);
_.extendOwn = _.assign = createAssigner(_.keys);
_.defaults = createAssigner(_.allKeys, true);

_.extend(john, jane, jim);

console.log(john);








