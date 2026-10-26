import { validarTexto } from './helper';
import type { Produto } from './types';

const produtos: Produto[] = [
    { id: 1, nome: 'Notebook', categoria: 'Eletrônicos', preco: 2500, estoque: 10 },
    { id: 2, nome: 'Cadeira', categoria: 'Móveis', preco: 300, estoque: 20 },
    { id: 3, nome: 'Teclado', categoria: 'Acessórios', preco: 150, estoque: 15 }
];

function cadastrarProduto(produto: Produto): void {
    if (!validarTexto(produto.nome)) {
        console.log('Nome inválido! O nome não pode ser vazio');
        return;
    }

    if (produto.preco <= 0) {
        return console.log('Preço inválido! O preço deve ser maior que zero');
    }

    if (produto.estoque < 0) {
        return console.log('Estoque inválido! O valor não pode ser negativo'); 1

    }

    if (produto.id < 4) {
        console.log('ID inválido! Utilize um ID a partir de 4.');
        return;
    }

    if (produtos.some((produtoCadastrado) => produtoCadastrado.id === produto.id)) {
        return console.log('Produto já cadastrado!');
    }

    produtos.push(produto);
}

function listarProdutos(): Produto[] {
    return produtos;
}

function buscarProdutoPorId(id: number): Produto | undefined {
    return produtos.find((produto) => produto.id === id);
}

function buscarProdutosPorNome(nome: string): Produto[] {
    return produtos.filter((produto) =>
        produto.nome.toLowerCase().includes(nome.trim().toLowerCase())
    );
}

function buscarProdutosPorCategoria(categoria: string): Produto[] {
    return produtos.filter((produto) => produto.categoria === categoria);
}

function atualizarProduto(id: number, produtoAtualizado: Produto): void {
    const produtoExistente = produtos.find((produto) => produto.id === id);

    if (!produtoExistente) {
        return console.log('Produto não encontrado!');
    }

    if (produtoAtualizado.nome.trim() === '') {
        return console.log('Nome inválido! O nome não pode ser vazio');
    }

    if (produtoAtualizado.preco <= 0) {
        return console.log('Preço inválido! O preço deve ser maior que zero');
    }

    if (produtoAtualizado.estoque < 0) {
        return console.log('Estoque inválido! O valor não pode ser negativo');
    }

    produtoExistente.nome = produtoAtualizado.nome;
    produtoExistente.preco = produtoAtualizado.preco;
    produtoExistente.estoque = produtoAtualizado.estoque;
    produtoExistente.categoria = produtoAtualizado.categoria;

    console.log('Produto atualizado com sucesso!');
}

function removerProduto(id: number): void {
    const indice = produtos.findIndex((produto) => produto.id === id);

    if (indice === -1) {
        console.log('Produto não encontrado!');
        return;
    }

    produtos.splice(indice, 1);
    console.log('Produto removido com sucesso!');
}

// Exportação das funções 

export {
    cadastrarProduto,
    listarProdutos,
    buscarProdutoPorId,
    buscarProdutosPorNome,
    buscarProdutosPorCategoria,
    atualizarProduto,
    removerProduto
};
