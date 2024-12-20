const listaDeNumeros = [ 33, 45, 22,54, 98, 84, 23, 423, 282]
const listaDePares = []
const listaDeImpares = []

let = indiceDoNumero = 0

while (indiceDoNumero < listaDeNumeros.length) {
    if (listaDeNumeros[indiceDoNumero] % 2 === 0) { // se o resto da divisão for 0, isso significa que o número é divisível por 2 e, portanto, é um número par.
        listaDePares.push(listaDeNumeros[indiceDoNumero])
    }else {
        listaDeImpares.push(listaDeNumeros[indiceDoNumero])
    }

    indiceDoNumero += 1
}

console.log(listaDePares)
console.log(listaDeImpares)