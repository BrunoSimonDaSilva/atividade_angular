import { Component, OnInit } from '@angular/core';
import { Pedido } from '../pedido';
import { PedidoService } from '../pedido.service';
@Component({
  selector: 'app-pedido-list',
  templateUrl: './pedido-list.component.html',
  styleUrls: ['./pedido-list.component.css']
})
export class PedidoListComponent implements OnInit {
  pedidos: Pedido[] = [];
  showFormPedido = false;

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.getPedidos();
  }

  onCloseForm(){
    this.showFormPedido = false;
    this.getPedidos();
  }

  private getPedidos(){
    this.pedidos = this.pedidoService.getPedidosPendentes();
  }

}
