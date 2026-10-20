import type {Produto} from './types'; 

const produtos: Produto[] = [];

export function cadastrarProduto(produto:Produto) {
    if (produto.nome.trim() === '') {
        return console.log('Nome inválido! O nome não pode ser vazio');
    }
    if (produto.preco <= 0) {
        return console.log('Preço inválido! O preço deve ser maior que zero');
    }
    if (produto.estoque < 0) {
        return console.log('Estoque inválido! O valor não pode ser negativo');
    }

    produtos.push(produto);

produtos.some((p) => p.id === produto.id);
};
