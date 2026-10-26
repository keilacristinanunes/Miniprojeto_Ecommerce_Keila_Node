import { cadastrarProduto, listarProdutos, buscarProdutoPorId, buscarProdutosPorNome, buscarProdutosPorCategoria, atualizarProduto, removerProduto } from './produtos';
import { adicionarAoCarrinho, listarCarrinho, alterarQuantidadeCarrinho, removerDoCarrinho, calcularTotalCarrinho } from './carrinho';
import { finalizarPedido, listarPedidos } from './pedidos';
import { cadastrarCliente, listarClientes, buscarClientePorId, buscarClientesPorNome } from './clientes';
import { relatorioVendas } from './relatorios';

import promptSync = require('prompt-sync');
const prompt = promptSync({ sigint: true });


function menuProdutos(): void {
    let opcao: number;

    do {
        console.log('\n\t GERENCIAR PRODUTOS');
        console.log('1 - Cadastrar produto');
        console.log('2 - Listar produtos');
        console.log('3 - Buscar produto por ID');
        console.log('4 - Buscar produtos por nome');
        console.log('5 - Filtrar por categoria');
        console.log('6 - Atualizar produto');
        console.log('7 - Remover produto');
        console.log('9 - Voltar');

        opcao = Number(prompt('Escolha uma opção: '));

        switch (opcao) {
            case 1:
                const id = Number(prompt('ID: '));
                const nome = prompt('Nome: ');
                const categoria = prompt('Categoria: ');
                const preco = Number(prompt('Preço: '));
                const estoque = Number(prompt('Estoque: '));

                cadastrarProduto({ id, nome, categoria, preco, estoque });
                break;

            case 2:
                console.log('Produtos cadastrados:');
                console.log(listarProdutos());
                break;

            case 3:
                console.log(buscarProdutoPorId(Number(prompt('ID: '))));
                break;

            case 4:
                console.log(buscarProdutosPorNome(prompt('Nome: ')));
                break;

            case 5:
                console.log(buscarProdutosPorCategoria(prompt('Categoria: ')));
                break;

            case 6: {
                const idAtualizar = Number(prompt('ID do produto: '));
                const produtoAtual = buscarProdutoPorId(idAtualizar);

                if (!produtoAtual) {
                    console.log('Produto não encontrado!');
                    break;
                }

                const nomeAtualizado = prompt('Novo nome: ');
                const categoriaAtualizada = prompt('Nova categoria: ');
                const precoAtualizado = Number(prompt('Novo preço: '));
                const estoqueAtualizado = Number(prompt('Novo estoque: '));

                atualizarProduto(idAtualizar, {
                    id: idAtualizar,
                    nome: nomeAtualizado,
                    categoria: categoriaAtualizada,
                    preco: precoAtualizado,
                    estoque: estoqueAtualizado
                });
                break;
            }

            case 7:
                removerProduto(Number(prompt('ID do produto: ')));
                break;

            case 9:
                console.log('Voltando ao menu principal...');
                break;

            default:
                console.log('Opção inválida!');
        }

    } while (opcao !== 9);
}

function menuClientes(): void {

    let opcao: number;

    do {
        console.log('\n\t GERENCIAR CLIENTES');
        console.log('1 - Cadastrar cliente');
        console.log('2 - Listar clientes');
        console.log('3 - Buscar cliente por ID');
        console.log('4 - Buscar clientes por nome');
        console.log('9 - Voltar');

        opcao = Number(prompt('Escolha uma opção: '));

        switch (opcao) {
            case 1: {
                const id = Number(prompt('ID: '));
                const nome = prompt('Nome: ');
                const email = prompt('E-mail: ');

                cadastrarCliente({ id, nome, email });
                break;
            }

            case 2:
                console.log(listarClientes());
                break;

            case 3: {
                const id = Number(prompt('ID do cliente: '));
                console.log(buscarClientePorId(id));
                break;
            }

            case 4: {
                const nome = prompt('Nome: ');
                const resultado = buscarClientesPorNome(nome);

                if (resultado.length === 0) {
                    console.log('Nenhum cliente encontrado!');
                } else {
                    console.table(resultado);
                }
                break;
            }

            case 9:
                console.log('Voltando ao menu principal...');
                break;

            default:
                console.log('Opção inválida!');
        }

    } while (opcao !== 9);

}


function menuCarrinho(): void {
    let opcao: number;

    do {
        console.log('\n\t CARRINHO DE COMPRAS');
        console.log('1 - Adicionar produto');
        console.log('2 - Listar itens');
        console.log('3 - Alterar quantidade');
        console.log('4 - Remover produto');
        console.log('5 - Ver valor total');
        console.log('9 - Voltar');

        opcao = Number(prompt('Escolha uma opção: '));

        switch (opcao) {
            case 1: {
                const id = Number(prompt('ID do produto: '));
                const quantidade = Number(prompt('Quantidade: '));

                adicionarAoCarrinho(id, quantidade);
                break;
            }

            case 2: {
                const itens = listarCarrinho();

                if (itens.length === 0) {
                    console.log('Carrinho vazio!');
                } else {
                    console.table(itens.map(item => ({
                        id: item.produto.id,
                        nome: item.produto.nome,
                        preco: item.produto.preco,
                        quantidade: item.quantidade,
                        subtotal: item.produto.preco * item.quantidade
                    })));
                }
                break;
            }

            case 3: {
                const id = Number(prompt('ID do produto: '));
                const quantidade = Number(prompt('Nova quantidade: '));

                alterarQuantidadeCarrinho(id, quantidade);
                break;
            }

            case 4: {
                const id = Number(prompt('ID do produto: '));

                removerDoCarrinho(id);
                break;
            }

            case 5:
                console.log(`Total: R$ ${calcularTotalCarrinho().toFixed(2)}`);
                break;

            case 9:
                console.log('Voltando ao menu principal...');
                break;

            default:
                console.log('Opção inválida!');
        }

    } while (opcao !== 9);
}


let escolha: number;

do {
    console.log('\n\t MENU E-COMMERCE');
    console.log('\t 1 - Menu Produtos');
    console.log('\t 2 - Menu Clientes');
    console.log('\t 3 - Carrinho de compras');
    console.log('\t 4 - Finalizar pedido');
    console.log('\t 5 - Consultar pedidos');
    console.log('\t 6 - Relatórios');
    console.log('\t 9 - Sair');

    escolha = Number(prompt('Escolha uma opção: '));

    switch (escolha) {
        case 1:
            menuProdutos();
            break;

        case 2:
            menuClientes();
            break;

        case 3:
            menuCarrinho();
            break;

        case 4: {
            const idCliente = Number(prompt('ID do cliente: '));
            finalizarPedido(idCliente);
            break;
        }

        case 5: {
            const pedidos = listarPedidos();

            if (pedidos.length === 0) {
                console.log('Nenhum pedido realizado!');
            } else {
                console.dir(pedidos, { depth: null });
            }
            break;
        }

        case 6:
            relatorioVendas();
            break;

        case 9:
            console.log('Saindo do sistema...');
            break;

        default:
            console.log('Opção inválida!');
    }

} while (escolha !== 9);
