"use strict";
class Estabelecimento {
    constructor(endereco, setor, produtos, filaDeEspera) {
        this.endereco = endereco;
        this.setor = setor;
        this.produtos = produtos;
        this._filaDeEspera = 10;
        this.filaDeEspera = filaDeEspera !== null && filaDeEspera !== void 0 ? filaDeEspera : this._filaDeEspera;
    }
    retornaNomeDosProdutos() {
        return this.produtos.map(produto => produto.nome);
    }
    get filaDeEspera() {
        return this._filaDeEspera;
    }
    set filaDeEspera(fila) {
        if (fila <= 0) {
            return;
        }
        this._filaDeEspera = fila;
    }
    diminuiFilaDeEspera() {
        if (this.filaDeEspera === 0) {
            return;
        }
        this.filaDeEspera -= 1;
    }
}
class Farmacia extends Estabelecimento {
    constructor(endereco, setor, produtos, filaDeEspera) {
        super(endereco, setor, produtos, filaDeEspera);
        this.endereco = endereco;
        this.setor = setor;
        this.produtos = produtos;
    }
    compraRemedioPrescrito(receita, produtosAComprar) {
        const remediosDisponiveis = this.produtos.filter(produto => produtosAComprar.includes(produto.nome));
        if (remediosDisponiveis.length === 0) {
            console.log('Infelizmente não temos os remédios em estoque');
        }
        const remediosAutorizados = remediosDisponiveis.filter(produto => //Receita não obrigatória a venda é autorizada sem problema, se for obrigatória ele fará a checagem.
         !produto.receitaObrigatoria ? true :
            receita.remedios.includes(produto.nome));
        console.log(remediosDisponiveis);
        console.log(remediosAutorizados);
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
const farmacia1 = new Farmacia('Rua C, 10, X', 'farmacêutico', [
    { nome: 'aspirina', valor: 0.8 },
    { nome: 'remédio', valor: 30 },
    { nome: 'remédio controlado 1', valor: 90, receitaObrigatoria: true },
    { nome: 'remédio controlado 2', valor: 80, receitaObrigatoria: true },
    { nome: 'vitamina', valor: 20 },
]);
farmacia1.compraRemedioPrescrito({
    remedios: ['remédio controlado 1'],
    identificacaoDoMedico: '123-456'
}, ['aspirina', 'remédio controlado 2', 'shampoo']);
