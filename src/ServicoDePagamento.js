export default class ServicoDePagamento {
    #pagamentos// Campo privado para armazenar os pagamentos

   constructor() {
    this.pagamentos = [];
  }

  pagar(codigoBarras, empresa, valor) {
    const pagamento = {
      codigoBarras: codigoBarras,
      empresa: empresa,
      valor: valor,
      categoria: valor > 100.0 ? 'cara' : 'padrão'
    };
    this.pagamentos.push(pagamento);
  }

  consultarUltimoPagamento() {
    if (this.pagamentos.length === 0) {
      return null;
    }
    return this.pagamentos[this.pagamentos.length - 1];
  }

  consultarTodosPagamentos() {
    return this.pagamentos;
  }

  filtrarPorCategoria(categoria) {
    return this.pagamentos.filter(p => p.categoria === categoria);
  }
}
