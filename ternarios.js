const idade = 19
const temCNH = true
let numeroDePassageiros = 0

const podeDirigir = idade > 18 && temCNH

if (podeDirigir) {
    console.log('Pessoa está habilitada para conduzir veículo de transporte urbano')
    numeroDePassageiros = 4
}else{
    console.log('Pessoa não está habilitada para conduzir veículo')
}

console.log({ numeroDePassageiros })

// Uso do ternário possibilita um código  mais dinâmico. if = ?; else = :
let numeroDePassageiros2 = podeDirigir ? 4 : 0
console.log({ numeroDePassageiros2 })