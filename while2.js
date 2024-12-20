const listaDeContatos = ['Paulo', 'Selina', 'Roger', 'Zeca', 'Rubens', 'Josué', 'Natália', 'Bianca']

let encontrouUsuarioOuPercorreuLista = false //iniciada como false para indicar que, no início, ainda não encontrou o usuário e não percorreu toda a lista de contatos
let indiceUsuario = 0

while (!encontrouUsuarioOuPercorreuLista){ // negação no while é usado para continuar o loop até que essa condição mude para true
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
}