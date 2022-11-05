export interface Pedido {
  pedidoNo: Number;
  titulo: string;
  descricao: string;
  prioridade: "baixo" | "alto";
  tipo: "Funcionalidade" | "Erro" | "Documentacao";
  resolvido?: Date;
}
