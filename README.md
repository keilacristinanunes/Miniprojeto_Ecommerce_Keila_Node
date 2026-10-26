Mini Projeto E-commerce

Sobre o projeto:
Este projeto foi desenvolvido como atividade avaliativa do curso de Back-End com Node.js, utilizando TypeScript.
O objetivo é simular o funcionamento de um e-commerce, permitindo o gerenciamento de produtos, clientes, carrinho de compras e pedidos, além da consulta de relatórios de vendas.

Autoria:
Keila Cristina Pereira Nunes
Turma de Back-End Node.js

Objetivo da aplicação.
O projeto permite cadastrar produtos e clientes, gerenciar um carrinho de compras, finalizar pedidos e consultar relatórios de vendas.

Funcionalidades:    

Produtos    
- Cadastrar e listar produtos
- Buscar produtos por ID, nome e categoria
- Atualizar e remover produtos
- Validar preço, estoque, nome e IDs duplicados

Clientes
- Cadastrar e listar clientes
- Buscar clientes por ID
- Impedir cadastros com ID ou e-mail duplicado
- Validar campos obrigatórios

Carrinho de compras
- Adicionar e remover produtos
- Alterar quantidades
- Verificar estoque disponível
- Calcular subtotal e total da compra

Pedidos
- Finalizar compras
- Consultar pedidos realizados
- Registrar cliente, produtos, quantidades, preços e data
- Atualizar estoque após a compra
- Limpar o carrinho após a finalização

Relatórios
- Consultar quantidade de pedidos realizados
- Consultar valor total vendido

Tecnologias utilizadas
- Node.js
- TypeScript

Estrutura dos arquivos:
main.ts: contém o menu principal do sistema.
types.ts: define os tipos utilizados.
produtos.ts: gerencia os produtos.
clientes.ts: gerencia os clientes.
carrinho.ts: controla os itens e valores do carrinho.
pedidos.ts: finaliza e registra as compras.
relatorios.ts: apresenta o resumo das vendas.
helper.ts: contém uma função de validação de texto.

Executando no terminal:
Passo a passo:
npx tsc
node dist/main.js
Após a execução, basta seguir as opções do menu interativo para utilizar o sistema.

Menu do sistema:
1 - Menu Produtos
2 - Menu Clientes
3 - Carrinho de compras
4 - Finalizar pedido
5 - Consultar pedidos
6 - Relatórios
9 - Sair

Exemplos das principais operações
- Produtos: cadastrar, listar, consultar, atualizar e remover.
- Clientes: cadastrar, listar e consultar.
- Carrinho: adicionar, remover, alterar quantidades e calcular total.
- Pedidos: finalizar compras e consultar pedidos.
- Relatórios: consultar quantidade de pedidos e total de vendas.

Regras:
- O identificador de cada produto deve ser único.
- O nome não pode estar vazio.
- O preço deve ser maior que zero.
- O estoque não pode ser negativo.
- Não permitir adicionar quantidades superiores ao estoque.
- Não permitir finalizar pedidos com carrinho vazio ou cliente inexistente.
- Descontar o estoque somente após finalizar a compra.

Limitações conhecidas do sistema:
Os dados são temporários e não são salvos ao fechar o sistema.
Funciona somente pelo terminal, não possui interface gráfica.


