function contar(){
    var ini = document.getElementById ('txti') //por mais que a caixa de texto seja númerica ela não está como número
    var fim = document.getElementById ('txtf')
    var passo = document.getElementById ('txtp')
    var res = document.getElementById ('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert ('[ERRO] Preencha todos os campos!')
    } else {
        res.innerHTML = 'Contando: <br> '
        let i = Number (ini.value) //Convertendo a caixa de texto para número
        let f = Number (fim.value)
        let p = Number (passo.value)
        if (p <= 0) {
            window.alert ('Passo inválido! Considerando passo 1')
            p = 1
        }
        if (i < f ){
            //Contagem crescente
            for (let c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{1f449} `  
            } 
        } else {
            //contagem regressiva
            for (let c = i; c >= f; c -= p ){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}