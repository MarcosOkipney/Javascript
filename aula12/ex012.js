var agora = new Date()
var horas = agora.getHours ()
console.log (`Agora são exatamente ${horas} horas`)
if (horas > 5 && horas < 11) {
    console.log ('Boa dia!')
}else if (horas > 11 && horas < 18) {
    console.log ('Boa tarde!')
}else if (horas > 18 && horas < 24) {
    console.log ('Boa noite!')
}else if (horas > 1 && horas < 5) {
    console.log ('Vai dormir Jaguara')
}