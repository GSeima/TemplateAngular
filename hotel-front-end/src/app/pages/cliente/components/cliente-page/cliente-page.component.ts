import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Cliente } from '../../model/cliente.model';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cliente-page',
  templateUrl: './cliente-page.component.html',
  styleUrls: ['./cliente-page.component.scss']
})

export class ClientePageComponent implements OnInit {

  //clientes = new MatTableDataSource<Cliente[]>();
  clientes: Cliente[]

  displayedColumns = ['cpf', 'nomeCompleto', 'email', 'telefone']

  constructor(private clienteService: ClienteService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.clienteService
    .buscar()
    .subscribe(clientes => {
      //this.clientes.paginator = this.paginator;
      this.clientes = clientes;
    })
  }

}
