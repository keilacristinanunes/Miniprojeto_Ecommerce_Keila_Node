
import { listarPedidos } from './pedidos';

function relatorioVendas(): void {
    const pedidos = listarPedidos();

    console.log('\n\t RELATÓRIO DE VENDAS ');

    for (const pedido of pedidos) {
        for (const item of pedido.itens) {
            console.log('Produto:', item.produto.nome);
            console.log('Quantidade:', item.quantidade);
            console.log('Preço unitário: R$', item.produto.preco);
        }
    }

    const total = pedidos.reduce(
        (soma, pedido) => soma + pedido.valorTotal, 0
    );

    console.log('Pedidos realizados:', pedidos.length);
    console.log('Total vendido: R$', total.toFixed(2));
}

export { relatorioVendas };
