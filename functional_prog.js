function mapForEach(arr, fn) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr.push(fn(arr[i]));
	}
	return newArr;
}

let arr = [1,2,3];

arr = mapForEach(arr, function(item) {
	return item * 2;
});

let limiter = function(limit, item) {
	console.log(limit + ' ' + item);
	return item > limit;
}

let test = mapForEach(arr, limiter.bind(this, 4));

let limiter2 = function(limit) {
	return function(limit, item) {
		return item > limit;
	}.bind(this, limit);
};

test = mapForEach(arr, limiter2(4));

console.log(arr);
console.log(test);