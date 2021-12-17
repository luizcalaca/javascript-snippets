//Promises
//Unresolved - Resolved - Rejected

// 3 States of Promises

/* 
waiting for something to finish.. - Unresolved - Pending
somenthing finished and it all wen ok = Resolved

something finished and something went bad - Rejected
*/

/* 
Promise working out -- resolved (status) -- then (Callback)
Promise something bad-- rejected (status) -- catch (Callback)
*/

const promise = new Promise((resolve, reject) => {
	resolve() //or reject()
})

promise.then(()=>{
	console.log('finally finished!')
}).then(() => {
	console.log('One more')
}).then(() => {
	console.log('More two')
}).then(() => {
	console.log('Third then')
}).catch(() => {
	console.log('Something wrong has happened')
})

/*
Request
*/

url = 'https://jsonplaceholder.typicode.com/posts/'

fetch(url)
  .then(data => console.log(data))
  .catch(error => console.log(error))
