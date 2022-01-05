// === is faster than == because it not does type conversion to compare two elements

let number = 10

console.time('time')
if(number == 10){ // === 10
	(() => {
  	console.log('benchmark == and ===')
  })()
}
console.timeEnd('time')
