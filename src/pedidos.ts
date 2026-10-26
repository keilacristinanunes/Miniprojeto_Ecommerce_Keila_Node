import type { Pedido } from './types';
import { buscarClientePorId } from './clientes';
import { buscarProdutoPorId } from './produtos';
import { listarCarrinho, calcularTotalCarrinho, limparCarrinho } from './carrinho';

const pedidos: Pedido[] = [];
function finalizarPedido(idCliente: number): void {
    const cliente = buscarClientePorId(idCliente);
    if (!cliente) {
        console.log('Cliente não encontrado!');
        return;
    }

    const itens = listarCarrinho();
    if (itens.length === 0) {
        console.log('Não é possível finalizar um carrinho vazio!');
        return;
    }

    for (const item of itens) {
        const produto = buscarProdutoPorId(item.produto.id);
        if (!produto) {
            console.log('Produto não encontrado!');
            return;
        }
        const novoPedido: Pedido = {
            id: pedidos.length + 1,
            cliente: cliente,
            itens: itens.map((item) => ({
                produto: { ...item.produto },
                quantidade: item.quantidade
            })),
            data: new Date(),
            valorTotal: calcularTotalCarrinho()
        };

        if (item.quantidade > produto.estoque) {
            console.log(`Estoque insuficiente para ${produto.nome}!`);
            return;
        }
        for (const item of itens) {
            const produto = buscarProdutoPorId(item.produto.id);

            if (produto) {
                produto.estoque -= item.quantidade;
            }
        }

        pedidos.push(novoPedido);
        limparCarrinho();
        console.log('Pedido finalizado com sucesso!');
    }
};

function listarPedidos(): Pedido[] {
    return pedidos;
}

export { finalizarPedido, listarPedidos };

