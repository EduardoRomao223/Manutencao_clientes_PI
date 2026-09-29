import { Component } from '@angular/core';

interface Cliente {
  id: number;
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
}

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css',
})
export class Clientes {
  clientes: Cliente[] = [
    {
      id: 1,
      nome: 'Lucas Silva',
      email: 'lucas@example.com',
      cpf: '123.456.789-00',
      telefone: '(11) 99999-9999',
    },
    {
      id: 2,
      nome: 'Maria Costa',
      email: 'maria@example.com',
      cpf: '234.567.890-00',
      telefone: '(11) 98888-8888',
    },
    {
      id: 3,
      nome: 'Felipe Almeida',
      email: 'felipe@example.com',
      cpf: '345.678.901-00',
      telefone: '(11) 97777-7777',
    },
  ];
}
