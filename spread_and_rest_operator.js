function concat(...strings) {
  return strings.join(' ');
}

let result = concat('teste', 'de', 'software')
//console.log(result)

//...rest operator
const {name, age, ...adress} = {
	name: 'Mc Carter',
  age: 45,
  street: 20,
  number: 2
}

console.log(name, age, adress)

//spread operator
const oneToFive = [1, 2, 3, 4, 5];
const oneToTen = [...oneToFive, 6, 7, 8, 9, 10];


// => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const woow = ['A', ...oneToFive, 'B', 'C', 'D', 'E', ...oneToFive, 42];


// =>  ["A", 1, 2, 3, 4, 5, "B", "C", "D", "E", 1, 2, 3, 4, 5, 42]
