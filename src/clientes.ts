
import type { Cliente } from './types';
import { validarTexto } from './helper';

const clientes: Cliente[] = [
    { id: 1, nome: 'Sofia Nunes', email: 'sofia@email.com' },
    { id: 2, nome: 'João Paulo', email: 'joao@email.com' },
    { id: 3, nome: 'Sonia Cristina', email: 'sonia@email.com' }
];

function cadastrarCliente(cliente: Cliente): void {
    if (!validarTexto(cliente.nome)) {
        console.log('Nome inválido!');
        return;
    }

    if (!validarTexto(cliente.email)) {
        console.log('Email inválido!');
        return;
    }

    if (!Number.isInteger(cliente.id) || cliente.id < 4) {
        console.log('ID inválido! Utilize um número inteiro a partir de 4.');
        return;
    }

    if (clientes.some(c => c.id === cliente.id)) {
        console.log('ID já cadastrado!');
        return;
    }

    if (clientes.some(c => c.email.toLowerCase() === cliente.email.toLowerCase())) {
        console.log('Email já cadastrado!');
        return;
    }

    clientes.push(cliente);
    console.log('Cliente cadastrado com sucesso!');
}

function listarClientes(): Cliente[] {
    return clientes;
}

function buscarClientePorId(id: number): Cliente | undefined {
    return clientes.find(cliente => cliente.id === id);
}

function buscarClientesPorNome(nome: string): Cliente[] {
    return clientes.filter(cliente =>
        cliente.nome.toLowerCase().includes(nome.trim().toLowerCase())
    );
}

export {
    cadastrarCliente,
    listarClientes,
    buscarClientePorId,
    buscarClientesPorNome
};
