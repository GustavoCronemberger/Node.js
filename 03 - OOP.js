"use strict";
//Composição x Herança
// A herança até aceita múltiplos métodos, porém, é mais comum que dê erros por isso não se usa dessa forma. Aí que vem a composição (Mixin no TS) com Generics, igual ao Java.
function MixinVoa(superClasse) {
    return class extends superClasse {
        constructor(...args) {
            super(args[0]);
        }
        voa() {
            console.log(`${this.nome} voou`);
        }
    };
}
function MixinNada(superClasse) {
    return class extends superClasse {
        constructor(...args) {
            super(args[0]);
        }
        nada() {
            console.log(`${this.nome} nadou`);
        }
    };
}
function MixinAnda(superClasse) {
    return class extends superClasse {
        constructor(...args) {
            super(args[0]);
        }
        anda() {
            console.log(`${this.nome} andou`);
        }
    };
}
class Animal {
    constructor({ nome, idadeEmMeses }) {
        this.nome = nome;
        this.idadeEmMeses = idadeEmMeses;
    }
    comer() {
        console.log(`${this.nome} se alimentou`);
    }
}
const cachorro = new Animal({ nome: 'Flora', idadeEmMeses: 36 });
const mosca = new (MixinVoa(Animal))({ nome: 'Mosca', idadeEmMeses: 0.1 });
const pato = new (MixinNada(MixinAnda(MixinVoa(Animal))))({ nome: 'Pato', idadeEmMeses: 5 });
//Também podemos criar uma classe para receber todos os mix:
class AnimalVoadorAndadorNadador extends (MixinNada(MixinAnda(MixinVoa(Animal)))) {
}
const pato2 = new (MixinNada(MixinAnda(MixinVoa(Animal))))({ nome: 'Pato2', idadeEmMeses: 15 });
cachorro.comer();
mosca.voa();
pato.anda();
pato.nada();
pato.voa();
pato2.anda();
pato2.nada();
pato2.voa();
