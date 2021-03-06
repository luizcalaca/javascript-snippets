
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

/*
arrow functions
*/

var team = {
	members: ['Louis','Marx'],
  teamName: 'Masters',
  getName(){
  	return this.teamName
  },
}

team.members.map((member) => {
	console.log(member)
})

console.log(team.getName())

//arrow functions

const team = {
	members: ['Luiz', 'Alexandre', 'Diego'],
  teamName: 'Masters',
  teamSummary: function (){
  	return this.members.map( (member) => {
    	return `${member} is on team ${this.teamName}`
    });
  }
};

console.log(team.teamSummary())
