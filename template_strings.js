/*
Interpolation strings and variables substituion
*/

let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;

/*
Multiline strings
*/

let text =
`The quick
brown fox
jumps over
the lazy dog`;

/*
Expressions in strings
*/

let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

function doubleMessage(number) {
  return `Your number doubled is ${2 * number}`;
}
