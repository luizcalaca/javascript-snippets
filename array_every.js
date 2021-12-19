/*

The every() method tests whether all elements of the array pass a test implemented by a required function. 
It returns true or false based on the condition.
*/

const ages = [2, 10, 18, 20, 22];

function checkAge(age) {
  return age > 20;
}

let result= ages.every( (item) => {
	return (item % 2) == 0
})
