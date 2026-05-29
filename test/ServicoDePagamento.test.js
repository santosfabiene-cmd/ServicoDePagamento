import ServicoDePagamento from '../src/ServicoDePagamento.js';
import assert from 'node:assert';

describe('ServicoDePagamento', () => {
  it('Registrar um pagamento com categoria "cara"', () => {
    const pagamentos = new ServicoDePagamento();
    pagamentos.pagar('1111-2222-3333', 'Prime Video', 150.00);
    const ultimoPagamento = pagamentos.consultarUltimoPagamento();

    assert.equal(ultimoPagamento.codigoBarras, '1111-2222-3333');
    assert.equal(ultimoPagamento.empresa, 'Prime Video');
    assert.equal(ultimoPagamento.valor, 150.00);
    assert.equal(ultimoPagamento.categoria, 'cara');
  });

  it('Registrar um pagamento com categoria "padrão"', () => {
    const pagamentos = new ServicoDePagamento();
    pagamentos.pagar('4444-5555-6666', 'Netflix', 80.00);
    const ultimoPagamento = pagamentos.consultarUltimoPagamento();

    assert.equal(ultimoPagamento.codigoBarras, '4444-5555-6666');
    assert.equal(ultimoPagamento.empresa, 'Netflix');
    assert.equal(ultimoPagamento.valor, 80.00);
    assert.equal(ultimoPagamento.categoria, 'padrão');
  });

  it('Consultar todos os pagamentos', () => {
    const pagamentos = new ServicoDePagamento();
    pagamentos.pagar('1111-2222-3333', 'Prime Video', 150.00);
    pagamentos.pagar('4444-5555-6666', 'Netflix', 80.00);
    const todosPagamentos = pagamentos.consultarTodosPagamentos();

    assert.equal(todosPagamentos.length, 2);
    assert.equal(todosPagamentos[0].empresa, 'Prime Video');
    assert.equal(todosPagamentos[1].empresa, 'Netflix');
  });

  it('Filtrar pagamentos por categoria', () => {
    const pagamentos = new ServicoDePagamento();
    pagamentos.pagar('1111-2222-3333', 'Prime Video', 150.00);
    pagamentos.pagar('4444-5555-6666', 'Netflix', 80.00);
    const caroPagamento = pagamentos.filtrarPorCategoria('cara');

    assert.equal(caroPagamento.length, 1);
    assert.equal(caroPagamento[0].empresa, 'Prime Video');
  });

  it('Retornar null se não houver pagamentos', () => {
    const pagamentos = new ServicoDePagamento();
    const ultimoPagamento = pagamentos.consultarUltimoPagamento();
    assert.equal(ultimoPagamento, null);
  });
});