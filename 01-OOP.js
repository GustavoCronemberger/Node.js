"use strict";
// class EstabelecimentoBase {
//     private endereco: string
//     private setor: string
//     private produtos: Produto[]
//     constructor (endereco: string, setor: string, p: Produto[]) {
//         this.endereco = endereco
//         this.setor = setor
//         this.produtos = p
//     }
// }
// Tudo isso pode ser resumido via ts para:
class EstabelecimentoBase {
    constructor(endereco, setor, produtos, filaDeEspera //Modo de fazer uma tipagem adicional, que pode ou não ser adicionada.
    ) {
        this.endereco = endereco;
        this.setor = setor;
        this.produtos = produtos;
        this._filaDeEspera = 10;
        this.filaDeEspera = filaDeEspera !== null && filaDeEspera !== void 0 ? filaDeEspera : this._filaDeEspera; // Se esse atributo for passado, deixo o valor do lado da esquerda do ternário, senão, começará com 10.
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
        if (this.filaDeEspera === 0) { // Evitar número negativo na fila
            return;
        }
        this.filaDeEspera -= 1;
    }
}
const padaria = new EstabelecimentoBase('Rua A, 12, X', 'alimentação', [
    { nome: 'pão', valor: 0.8 },
    { nome: 'arroz', valor: 30 },
    { nome: 'leite', valor: 9 },
    { nome: 'brigadeiro', valor: 2 },
    { nome: 'carne moída', valor: -45 }
]);
// console.log(padaria)
console.log(padaria.retornaNomeDosProdutos());
padaria.diminuiFilaDeEspera();
padaria.diminuiFilaDeEspera();
console.log(padaria.filaDeEspera);
