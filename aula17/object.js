let pai = {nome: 'José', sexo: 'M', peso: '60.2', 
engordar(p){
    console.log ('Engordou')
    this.peso += p
}}
pai.engordar (5)
console.log (`${pai.nome} engordou ${pai.peso}`)