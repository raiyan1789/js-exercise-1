var text = 'The sum is ';
function addIT(numA, numB){

	
	var total = numA + numB;
	console.log(text + total);
}
function multiply(numA, numB){
	var total = numA * numB;
	return total;
	console.log("this is never going to happen")
}
console.log(multiply(29, 4));

//addIT(8,8);
// addIT(10,10);
var myClass = "is great!";
var kurt = {
	arms: 2,
	bigNose: true,
	hairColor: 'brown',
	slogan: function(what){
		console.log(what + ' is awesome')
	}
}
kurt.slogan('JavaScript');
kurt.hairColor = 'grey';
console.log(kurt.hairColor);
console.log(myClass);

