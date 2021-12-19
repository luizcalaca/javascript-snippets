const ages = [3, 10, 18, 20, 21];

function checkAge(age) {
  return age > 20;
}

let result= ages.filter( (item) => {
	return item > 18
})

/*
Use filter() when: you need to remove unwanted elements based on some condition(s).
*/

var uniqueArray = array.filter( function( elem, index, array ) {
    return array.indexOf( elem ) === index;
} );

/*
What filter() does: like map(), filter() iterates the array from left to right invoking a return function on each element. 
The return value must be a Boolean indicating whether the element will be kept or dropped. 
After all elements have been parsed, filter() returns a new array with all elements that returned true.

*/

array = [0,1,1,5,6,9,50,36]

var uniqueArray = array.filter( function( elem, index, array ) {
    return ( elem ) > 10;
} );
