import { Injectable } from '@angular/core';
import { Pedido } from './pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private pedidos : Pedido[] = [];

  constructor() {}

  getPedidosPendentes(): Pedido[]{
    return this.pedidos.filter((pedido) => !pedido.resolvido)
  }

}
