class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");

/*

*/

class Aluno {

  constructor(options){
    this.name = options.name
    this.age = options.age
  }

  somar(){
    return this.num1 + 1
  }

  acao(){
    return 'Uma nova ação'
  }
}

class Grupo extends Aluno{
    
    constructor(nome){
    	super(NaN, NaN)
      this.name = nome
      this.alunos = []
    }

    add(aluno){
      this.alunos.push(aluno)
    }

    todos(){
      return this.alunos
    }
 }

 let aluno1 = new Aluno({name: 'Luiz', age: 89})
 let aluno2 = new Aluno({name: 'Marcos', age: 15})

 let group = new Grupo('novo grupo')
 group.add(aluno1)
 group.add(aluno2)

console.log(group.name)
console.log(group.todos())
console.log(group.acao())
