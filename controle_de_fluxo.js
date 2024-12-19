const numero1 = 20
const numero2 = 20

if (numero1 > 1) {
    console.log('Este número é maior que 1')
}

if (numero1 > 200) {
    console.log('Este número é maior que 200')
} else {
    console.log('Este número é menor ou igual a 200')
}

if (numero2 <= numero1){
    console.log(`${numero2} é menor ou igual a ${numero1}`)
}

// === compara tipo e valor, então da o resultado igual. 
// == compara apenas o valor. Cuidado!
// = atribuição
if (numero1 === numero2) {
    console.log('Os números são iguais')
}