
/*
arrow functions does not support the reseverd word 'this'
*/

var obj = {
  i: 10,
  b: () => console.log(this.i), // undefined
  c: function() {
    console.log(this.i);
  }
}

obj.b(); 
obj.c();

/*
arrow function without argument
*/

const element = () => {
	return 'Hello'
}

console.log(element())

/*
arrow function with two arguments
*/

const add = (a,b) => {
	return a+b
}

console.log(add(5,6))
