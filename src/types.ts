export type Produto = {
    id: number;
    nome: string;
    preco: number;
    estoque: number;
    categoria: string;
};

export type Cliente = {
    id: number;
    nome: string;
    email: string;
};

export type ItemCarrinho = {
    produto: Produto;
    quantidade: number;
};

export type Pedido = {
    id: number;
    cliente: Cliente;
    itens: ItemCarrinho[];
    data: Date;
    valorTotal: number;
};