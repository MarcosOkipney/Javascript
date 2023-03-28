let num = [5, 7, 9]
num.sort()
num [3] = 6
num.push(12)
console.log (num)

let pos = num.indexOf (9)
if (pos == -1) {
    console.log ('O valor não foi encontrado')
} else {
   console.log (`O valor 9 está na posição ${pos}`) 
}
