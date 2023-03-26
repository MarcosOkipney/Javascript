var idade = 16
console.log (`Você tem ${idade} anos`)
if (idade < 16) {
    console.log ('Não pode votar')
} else if (idade < 18 || idade > 65){  
    console.log ('O voto não é obrigatório')
} else {
    console.log ('O voto é obrigatório')
}