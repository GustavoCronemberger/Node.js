const listaDeContatos = ['Paulo', 'Selina', 'Roger', 'Zeca', 'Rubens', 'Josué', 'Natália', 'Bianca']

let encontrouUsuarioOuPercorreuLista = false
let indiceUsuario = 0

do { // Quando se quer que o algorítmo rode ao menos uma vez antes de parar.
    console.log('Rodei?')
    const usuarioAtual = listaDeContatos[indiceUsuario]
    if (usuarioAtual.startsWith('Z')) {
        encontrouUsuarioOuPercorreuLista = true
        console.log(`Usuário encontrado: ${usuarioAtual}`)
    }
    indiceUsuario += 1

    if (indiceUsuario === listaDeContatos.length) {
        encontrouUsuarioOuPercorreuLista = true
        console.log('Usuário não foi encontrado')
    }
} while  (!encontrouUsuarioOuPercorreuLista)