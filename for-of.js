const listaDeNumeros = [33, 1000, 23, 56, 777, -45, -90]

//Forma mais rústica/imperativo de fazer um for.
for (let contador = 0; contador < 100; contador += 10) {
    console.log(contador)
}

//Forma mais adaptativa/declarativa
for (const numero of listaDeNumeros) {
    console.log(numero)
}

// Percorrer/Iterar arrays é utilizando for of.
