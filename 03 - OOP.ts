//Composição x Herança
// A herança até aceita múltiplos métodos, porém, é mais comum que dê erros por isso não se usa dessa forma. Aí que vem a composição (Mixin no TS) com Generics, igual ao Java.

type Constructor = new (...args: any[]) => {};
type GConstructor<T = {}> = new (...args: any[]) => T;
type AnimalProps = GConstructor<{nome: string, idadeEmMeses: number}>

function MixinVoa<TBase extends AnimalProps>(superClasse: TBase) {
    return class extends superClasse {
        constructor (...args: any) {
            super(args[0])
        }
        voa () {
            console.log(`${this.nome} voou`)
        }
    }
}

function MixinNada<TBase extends AnimalProps>(superClasse: TBase) {
    return class extends superClasse {
        constructor (...args: any) {
            super(args[0])
        }
        nada () {
            console.log(`${this.nome} nadou`)
        }
    }
}

function MixinAnda<TBase extends AnimalProps>(superClasse: TBase) {
    return class extends superClasse {
        constructor (...args: any) {
            super(args[0])
        }
        anda () {
            console.log(`${this.nome} andou`)
        }
    }
}

interface AnimalInterface {
    nome: string
    idadeEmMeses: number
    comer: () => void
}

class Animal implements AnimalInterface {
    public nome: string
    public idadeEmMeses: number;

    constructor ({nome, idadeEmMeses} : {nome: string, idadeEmMeses: number}){
        this.nome = nome
        this.idadeEmMeses = idadeEmMeses
    }

    comer (): void{
        console.log(`${this.nome} se alimentou`)
    }
}

const cachorro = new Animal({nome: 'Flora', idadeEmMeses: 36})
const mosca = new (MixinVoa(Animal))({nome: 'Mosca', idadeEmMeses: 0.1})
const pato = new (MixinNada(MixinAnda(MixinVoa(Animal))))({nome: 'Pato', idadeEmMeses: 5})

//Também podemos criar uma classe para receber todos os mix:
class AnimalVoadorAndadorNadador extends (MixinNada(MixinAnda(MixinVoa(Animal)))) {}

const pato2 = new (MixinNada(MixinAnda(MixinVoa(Animal))))({nome: 'Pato2', idadeEmMeses: 15})

cachorro.comer()
mosca.voa()
pato.anda()
pato.nada()
pato.voa()

pato2.anda()
pato2.nada()
pato2.voa()