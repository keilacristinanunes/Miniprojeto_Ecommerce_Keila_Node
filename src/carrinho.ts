import type { ItemCarrinho } from './types';
import { buscarProdutoPorId } from './produtos';

const carrinho: ItemCarrinho[] = [];


function adicionarAoCarrinho(idProduto: number, quantidade: number): void {
    const produto = buscarProdutoPorId(idProduto);

    if (!produto) {
        console.log('Produto não encontrado!');
        return;
    }

    if (quantidade <= 0) {
        console.log('Quantidade inválida!');
        return;
    }

    const itemExistente = carrinho.find((item) => item.produto.id === idProduto);

    const quantidadeTotal = (itemExistente?.quantidade ?? 0) + quantidade;

    if (quantidadeTotal > produto.estoque) {
        console.log('Quantidade indisponível em estoque!');
        return;
    }

    if (itemExistente) {
        itemExistente.quantidade += quantidade;
    } else {
        carrinho.push({ produto, quantidade });
    }

    console.log('Produto adicionado ao carrinho com sucesso!');
}

function listarCarrinho(): ItemCarrinho[] {
    return carrinho;
}

function removerDoCarrinho(idProduto: number): void {
    const indice = carrinho.findIndex((item) => item.produto.id === idProduto);

    if (indice === -1) {
        console.log('Produto não encontrado no carrinho!');
        return;
    }

    carrinho.splice(indice, 1);
    console.log('Produto removido do carrinho com sucesso!');
}


function alterarQuantidadeCarrinho(idProduto: number, novaQuantidade: number): void {
    const item = carrinho.find((item) => item.produto.id === idProduto);

    if (!item) {
        console.log('Produto não encontrado no carrinho!');
        return;
    }

    if (novaQuantidade <= 0) {
        console.log('Quantidade inválida!');
        return;
    }

    if (novaQuantidade > item.produto.estoque) {
        console.log('Quantidade indisponível em estoque!');
        return;
    }

    item.quantidade = novaQuantidade;

    console.log('Nova quantidade atualizada com sucesso!');
}

function calcularSubtotal(item: ItemCarrinho): number {
    return item.produto.preco * item.quantidade;
}

function calcularTotalCarrinho(): number {
    return carrinho.reduce((total, item) => {
        return total + calcularSubtotal(item);
    }, 0);
}

function limparCarrinho(): void {
    carrinho.length = 0;
}

export {
    adicionarAoCarrinho,
    listarCarrinho,
    removerDoCarrinho,
    alterarQuantidadeCarrinho,
    calcularSubtotal,
    calcularTotalCarrinho,
    limparCarrinho,
};

