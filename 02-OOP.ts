// import { Produto } from "../Node.js/01-OOP"
type Produto2 = {
    nome: string
    valor: number
}

interface EstabelecimentoInterface {
    endereco: string
    setor: string
    filaDeEspera: number
    retornaNomeDosProdutos: () => string[]
    diminuiFilaDeEspera(): void
}

interface ReceitaInterface {
    remedios: string[]
    identificacaoDoMedico: string
}

interface Remedio extends Produto2 {
    receitaObrigatoria?: boolean
}

interface FarmaciaInterface extends EstabelecimentoInterface {
    compraRemedioPrescrito: (
        receita: ReceitaInterface, produtosAComprar: string[]
    ) => void
}

class Estabelecimento implements EstabelecimentoInterface {
    private _filaDeEspera = 10

    constructor (
        public endereco: string, 
        public setor: string, 
        protected produtos: Produto[],
        filaDeEspera?: number
    ) {
        this.filaDeEspera = filaDeEspera ?? this._filaDeEspera
    }    
    public retornaNomeDosProdutos(): string[] {
        return this.produtos.map(produto => produto.nome)
    }

    get filaDeEspera() {
        return this._filaDeEspera
    }

    set filaDeEspera(fila: number) {
        if(fila <= 0){
            return
        }

        this._filaDeEspera = fila
    }

    diminuiFilaDeEspera(){
        if (this.filaDeEspera === 0) {
            return
        }

        this.filaDeEspera -= 1
    }
}


class Farmacia extends Estabelecimento implements FarmaciaInterface{
    constructor (
        public endereco: string, 
        public setor: string, 
        protected produtos: Remedio[],
        filaDeEspera?: number
    ) {
        super (endereco, setor, produtos, filaDeEspera)
    }

    public compraRemedioPrescrito(
        receita: ReceitaInterface, 
        produtosAComprar: string[]
    ): void {
        const remediosDisponiveis = this.produtos.filter(
            produto => produtosAComprar.includes(produto.nome)
        )

        if(remediosDisponiveis.length === 0){
            console.log('Infelizmente não temos os remédios em estoque')
        }

        const remediosAutorizados = remediosDisponiveis.filter(
            produto => //Receita não obrigatória a venda é autorizada sem problema, se for obrigatória ele fará a checagem.
                !produto.receitaObrigatoria ? true :
                receita.remedios.includes(produto.nome)
        )

        console.log(remediosDisponiveis)
        console.log(remediosAutorizados)
    }
}    


// const supermercado = new Estabelecimento(
//     'Rua A, 12, X', 
//     'alimentação', 
//     [
//     {nome: 'banana', valor: 0.8},
//     {nome: 'arroz', valor: 30},
//     {nome: 'azeite', valor: 20},
//     {nome: 'leite', valor: 9},
//     {nome: 'carne moída', valor: -45}
//     ],
//     25
// )

const farmacia1 = new Farmacia(
    'Rua C, 10, X', 
    'farmacêutico', 
    [
    {nome: 'aspirina', valor: 0.8},
    {nome: 'remédio', valor: 30},
    {nome: 'remédio controlado 1', valor: 90, receitaObrigatoria: true},
    {nome: 'remédio controlado 2', valor: 80, receitaObrigatoria: true},
    {nome: 'vitamina', valor: 20},
    ],
)

farmacia1.compraRemedioPrescrito({
    remedios: ['remédio controlado 1'],
    identificacaoDoMedico: '123-456'
}, ['aspirina', 'remédio controlado 2', 'shampoo'])