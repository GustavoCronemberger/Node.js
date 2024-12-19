// NaN: indicativo que foi feito algo de errado no código.
// não é possível diminuir ou outros cálculos que não sejam entre números, aparecerá NaN.
// soma é exceção, pois o js converte para string e junta os dois. CUIDADO.
const numero1 = 10
const numero2 = 20
const numero3 = 'a'

const soma = numero1 + numero2
const subtracao = numero1 - numero2
const multiplicacao = numero1 * numero2
const divisao = numero1 / numero2
const divisao2 = 3 / 2
const restoDivisao = 3 % 2 //sobra da divisão. serve para descobrir se é par ou primo
const elevado = numero2 ** numero2
const elevado2 = Math.pow(2,3) // usando biblioteca para fazer cálculos
const erro =  numero3 - numero2
const erro2 =  numero3 + numero2
console.log({ soma })
console.log({ subtracao })
console.log({ multiplicacao })
console.log({ divisao })
console.log({ divisao2 })
console.log({ restoDivisao })
console.log({ elevado })
console.log({ elevado2 })
console.log({ erro })
console.log({ erro2 })