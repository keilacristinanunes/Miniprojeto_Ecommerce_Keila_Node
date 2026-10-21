import type { Produto } from './types';

const produtos: Produto[] = [];

export function cadastrarProduto(produto: Produto) {
    if (produto.nome.trim() === '') {
        return console.log('Nome inválido! O nome não pode ser vazio');
    }

    if (produto.preco <= 0) {
        return console.log('Preço inválido! O preço deve ser maior que zero');
    }

    if (produto.estoque < 0) {
        return console.log('Estoque inválido! O valor não pode ser negativo');
    }

    if (produtos.some((p) => p.id === produto.id)) {          // Verifica se já existe um produto com o mesmo ID, usando arrow function e some().
        return console.log('Produto já cadastrado!');
    }

    produtos.push(produto);
};

export function listarProdutos() {
    return produtos;
};

export function buscarProdutoPorId(id: number) {
    const produto = produtos.find((p) => p.id === id);  // Usando arrow function e find() para buscar o produto pelo ID
    if (!produto) {
        return console.log('Produto não encontrado!');
    }
    return produto;
};

export function buscarProdutosPorNome(nome: string) {
    return produtos.filter((p) => p.nome.includes(nome));  // Usando arrow function e filter() para buscar produtos pelo nome
};

export function buscarProdutosPorCategoria(categoria: string) {
    return produtos.filter((p) => p.categoria === categoria);  // Usando arrow function e filter() para buscar produtos pela categoria
};

//atualização e remoção de produtos

export function atualizarProduto(id: number, produtoAtualizado: Produto) {

};