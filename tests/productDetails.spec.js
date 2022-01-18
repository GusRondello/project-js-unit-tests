const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

const alchool = 'Alcool gel';
const mask = 'Máscara';
const object1Id = productDetails(alchool, mask)[0].details.productId;
const object2Id = productDetails(alchool, mask)[1].details.productId;
const Id = '123';
const difObj = () => {
  const object1 = productDetails(alchool, mask)[0];
  const object2 = productDetails(alchool, mask)[1];
  if (object1 !== object2) {
    return true;
  }
  return false;
}

describe('6 - Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
  it('Teste se productDetails é uma função.', () => {
    expect(typeof productDetails).toBe('function');
  });
  it('Teste se o retorno da função é um array.', () => {
    // Tive ajuda da Ana na mentoria e do Leo Araujo para entender a questão do array retornar como object
    expect(Array.isArray(productDetails())).toBeTruthy();
  });
  it('Teste se o array retornado pela função contém dois itens dentro.', () => {
    expect(productDetails().length).toBe(2);
  });
  it('Teste se os dois itens dentro do array retornado pela função são objetos.', () => {
    expect(typeof productDetails()).toBe('object');
  });
  it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    expect(difObj()).toBeTruthy();
  });
  it('Teste se os dois productIds terminam com 123.', () => {
    expect(object1Id && object2Id).toContain(Id);
  });
});
