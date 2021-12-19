/*
The some() method tests whether at least some of the elements of an array pass the test implemented by an assigned function.
*/

const ages = [1, 3, 7, 20, 5];

let result= ages.some( (item) => {
	return (item % 2) == 0
})

// Is there some even number? Yes! 20.
