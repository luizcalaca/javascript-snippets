//It get the array planned without levels

let a = (...rest)=>{
  	console.log(rest.flat(4))
}

nomes = [1,2,23, [2,36, [2,36, [6,32]]]]
a(nomes, "string")
