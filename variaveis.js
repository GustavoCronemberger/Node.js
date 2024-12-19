//nome de variáveis não podem começar com numeral e caracter especial (exceção do underline). 

const numero = 20;
console.log(numero);

//colocando variáveis dentro de um texto: 

// obs: não crie variáveis usando var (var teste = testando matematica)
// não é possível declarar uma const sem declarar ela (const nome), como é constante precisa inicializa-la (const nome = gustavo).
// de forma geral, é melhor deixar definido como nulo do que não atribuir nada e ficar como undefined.
const nome = 'Gustavo'
console.log('Oi', nome, '!')
console.log(`Oi, ${nome}!`)