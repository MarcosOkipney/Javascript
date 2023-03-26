function carregar () {
    var msg = document.getElementById ('msg')
    var img = document.getElementById ('imagem')
    var data = new Date()
    var hora = data.getHours ()
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'bom-dia.png'
        document.body.style.background = ('#d8b78e')
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = 'boa-tarde.png'
        document.body.style.background = ('#896649')
    } else {
        //Boa noite
        img.src = "boa-noite.png"
        document.body.style.background = ('#5b456a')
    }
}
