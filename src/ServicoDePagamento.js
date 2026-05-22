/*
crie uma classe que possua dois metodos: um para realizar pagamento e outro para consultar 
o último pagamento.
Pagamentos serão armazenados como objetos JavaScript dento de um vetor/lista de pagamentos. 
Cada pagamento terá as propriedades: Código de barras, empresa e valor.
Quando um pagamento for realizado e o valor for maior que 100.00, o pagamento também terá a
propriedade categoria como 'cara'. 
Caso contrario, a propriedade categoria ficará como 'padrão'.
O método de consultar trará apenas o último pagamento.


ex:
const servicoDePagamento = new ServicoDePagamento();
servicoDePagamento.pagar('0987-9854-2345', 'Samar', 45.98);
console.log(servicoDePagamento.consultarUltimoPagamento());
{
  codigoBarras: '0987-9854-2345',
  empresa: 'Samar',
  valor: 56.87 ,
  categoria: 'cara'
}

ENTREGA: 
CRIAR O REPOSITORIO
CRIAR UMA CLASSE NA PASTA SRC
CRIAR TESTES PARA ESSA CLASSE NA PASTA TEST
*/

export default class ServicoDePagamento {
 #pagamentos

  constructor(){
    this.#pagamentos = [];
  }
  
  realizarPagamento(codigo, empresa, valor){
    
    if(valor > 100){
      this.#pagamentos.push({
        categoria: 'cara',
        codigoDeBarras: codigo,
        empresa: empresa,
        valor: valor
      });
    }else{
      this.#pagamentos.push({
        categoria: 'padrão',
        codigoDeBarras: codigo,
        empresa: empresa,
        valor: valor
      });
    }
  }
  consultarUltimoPagamento(){
    return this.#pagamentos.at(-1);
  }
}

