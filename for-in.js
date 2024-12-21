//Não use for-in para percorrer objetos.
//Quando usar: Para manipular objetos.

const user = {
    name: 'JOSÉ maRIA SANTOS sousa',
    email: 'JOSE.M1LGRAU@gmail.com',
    age: 23,
    address: 'X Street'
}

for (const key in user) {
// Para aplicar a lógica desse primeiro if, foi preciso: 1) separar os nomes em arrays; 2) deixar cada valores vazios; 3) diminuir o nome para normalizar;  4) recurso do js para separação do array, escolhi apenas o primeiro char, mas poderia ter vários (a, b, c...); 5) Pega o que tinha antes que estava vazio, seleciona a primeira par aficar upper, pegar resto do nome colocando ao final como uma string (antes estava em array)
    if (key === 'name') {        
        const names = user[key].split(' ')
        user[key] = ''
        for (const name of names) {
            const normalizedName = name.toLowerCase()
            const [primeiraLetra, ...restoDoNome] = normalizedName

            user[key] = user[key] + ' ' + primeiraLetra.toLocaleUpperCase() + restoDoNome.join('')
            user[key] = user[key].trim() 
        }
    }
    if (key === 'email') {
        user[key] = user[key].toLowerCase()
    }
}
console.log(user)
