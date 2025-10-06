var valores = [5,1,4,6]
valores.sort()
var pos = valores.indexOf(5)
if (pos == -1) {
    console.log ((`O número não foi encontrado`))
} else {
    console.log(`A posição do número é ${pos}`)
}