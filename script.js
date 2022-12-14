function verificar(){   

    var data = new Date()
    var ano = data.getFullYear()
    var anoN = document.getElementById('anoNS')
    var res = document.getElementById('txt')

    if(anoN.value.length == 0 || Number(anoN.value) > ano || Number(anoN.value) <= 1669 || Number(anoN.value)<0){
        window.alert('[ERRO] veja os dados com cuidado')
        res.innerHTML = 'Foi digitado uma data errada, ou muita antiga por favor digite novamente.'
    }else {
        var idade = ano - Number(anoN.value)
        var sex = document.getElementsByName('genero')
        var genero = ' '
        var img = document.getElementById('foto')
        if(sex[0].checked){
            genero = 'um homem'
            if(idade>=0 && idade<=12){
                img.setAttribute('src', 'img/criH.jpg')
            }else if(idade>=13 && idade<=21){
                img.setAttribute('src', 'img/adoH.jpg')
            }else if(idade>=22 && idade<=52){
                img.setAttribute('src', 'img/adultH.jpg')
            }else if(idade>=53){
                img.setAttribute('src', 'img/velH.jpeg')
            }
        } else if (sex[1].checked){
            genero = 'uma mulher'
            if(idade>=0 && idade<=12){
                img.setAttribute('src', 'img/criM.jpg')
            }else if(idade>=13 && idade<=21){
                img.setAttribute('src', 'img/adoM.jpg')
            }else if(idade>=22 && idade<=52){
                img.setAttribute('src', 'img/adultM.jpg')
            }else if(idade>=53){
                img.setAttribute('src', 'img/velM.jpeg')
            }
        }
        res.innerHTML = `<p>Vimos que você é ${genero} com idade de ${idade} anos.</p>`
        res.appendChild(img)

        img.classList.add('fts')
    }
}