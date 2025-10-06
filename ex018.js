var num = document.getElementById('adc');//Variável para puxar o Input
var lista = document.getElementById('lista'); //Variavel para colocar na lista
var res = document.getElementById('resultado'); //Variavel para mostrar o resultado
var valores = [] //Array

function isnumero (n){ //Função que chama o número usando parametro 'n'
    if (Number(n) >= 1 && Number(n) <= 100){ //se numero for maior ou igual a 1 e numero menor ou igual a 100
    return true //Retorna verdadeiro
    } else {// se não
        return false //retorna falso
    }
}

function isLista (n, lista) { //Função que verfica se o número já está na lista
    if (lista.indexOf(Number(n)) != -1 ) { //
        return true
    } else {
        return false
    }
}

function adicionar (){
    if (isnumero(num.value) && !isLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `O Valor ${num.value} foi adicionado`
        lista.appendChild(item)

    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()

}

function Finalizar () {
    if (valores.length == 0) {
        window.alert('Digite um valor')
} else {
    var tot = valores.length
    var maior = valores[0]
    var menor = valores[0]
    var soma = 0 
    var media = 0
    for (var pos in valores){
        soma += valores[pos]
        if (valores[pos] > maior)
            maior = valores[pos]
        if (valores[pos] < menor)
            menor = valores[pos]
    }
media = soma / tot
res.innerHTML = ''
res.innerHTML += `<p> Ao todo temos ${tot} Números cadastrados </p> `
res.innerHTML += `<p> O maior número cadastrado é ${maior} </p>`
res.innerHTML += `<p> O menor número cadastrado é ${menor} </p>`
res.innerHTML += `<p> A soma dos valores cadastrados é ${soma} </p>`
res.innerHTML += `<p> A média dos valores cadastrados é ${media} </p>`

}
}