function makeAjaxRequest(url, method = 'GET') {
  return method
}

/*
Refactoring
*/

function sum(a, b) {
  if (a === undefined) {
    a = 0; 
  }
  
  if (b === undefined) {
    b = 0; 
  }
  
  return a + b;
} 

/*
to below function
*/

function sum(a = 0, b = 0) {
  return a + b;
} 
