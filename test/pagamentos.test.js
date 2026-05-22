import ServicoDePagamento from '../src/ServicoDePagamento.js';
import assert from 'node:assert'; 

describe('Validar a classe de serviço de pagamentos', () => {
    it('Validar inserção de um valor > que 100 e sua categoria ficar como "cara" ', ()=>{
        const pagamento = new ServicoDePagamento();
        pagamento.realizarPagamento('1287-9856-2455', 'Amazon', 100.99);
        const validarCategoria = pagamento.consultarUltimoPagamento();
        assert.equal(validarCategoria.categoria, 'cara');
        console.log(pagamento.consultarUltimoPagamento());
    });

     it('Validar inserção de valor < 100 e sua categoria ficar como "padrão" ', ()=>{
        const pagamento = new ServicoDePagamento();
        pagamento.realizarPagamento('1288-9996-2453', 'Amazon', 99.99);
        const validarCategoria = pagamento.consultarUltimoPagamento();
        assert.equal(validarCategoria.categoria, 'padrão');
        console.log(pagamento.consultarUltimoPagamento());
    });

     it('Validar apresentação das informações corretas ao consultar o ultimo pagamento efetuado', ()=>{
        const pagamento = new ServicoDePagamento();
        pagamento.realizarPagamento('1200-9856-2455', 'Ifood', 2000.00);
        const guardarPagamentos = pagamento.consultarUltimoPagamento();
        assert.equal(guardarPagamentos.categoria, 'cara');
        assert.equal(guardarPagamentos.codigoDeBarras, '1200-9856-2455');
        assert.equal(guardarPagamentos.empresa, 'Ifood');
        assert.equal(guardarPagamentos.valor, 2000.00);
        console.log(pagamento.consultarUltimoPagamento());
    });

     it('Validar inserção de valor igual a 100 e sua categoria ficar como "padrão"', ()=>{
        const pagamento = new ServicoDePagamento();
        pagamento.realizarPagamento('1488-8996-7453', 'Logitech', 100.00);
        const validarCategoria = pagamento.consultarUltimoPagamento();
        assert.equal(validarCategoria.categoria, 'padrão');
        console.log(pagamento.consultarUltimoPagamento());
    });

     it('Validar apresentação apenas do ultimo pagamento efetuado', ()=>{
        const pagamento = new ServicoDePagamento();
        pagamento.realizarPagamento('1588-8996-7453', 'Logitech', 200.00);
        pagamento.realizarPagamento('3588-8996-7453', 'Vivo', 150.50);
        const guardarPagamentos = pagamento.consultarUltimoPagamento();
        assert.equal(guardarPagamentos.categoria, 'cara');
        assert.equal(guardarPagamentos.codigoDeBarras, '3588-8996-7453');
        assert.equal(guardarPagamentos.empresa, 'Vivo');
        assert.equal(guardarPagamentos.valor, 150.50);
        console.log(pagamento.consultarUltimoPagamento());
    });
});

