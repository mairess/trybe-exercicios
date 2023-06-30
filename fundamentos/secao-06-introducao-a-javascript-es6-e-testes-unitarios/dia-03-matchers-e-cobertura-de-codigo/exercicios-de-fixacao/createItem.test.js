const createItem = require('./createItem');

describe('a função createItem', () => {
  it('cria um item válido', () => {
    expect(createItem('banana', 'kg', 1.99, 20)).toHaveProperty('name', 'banana');
    expect(createItem('banana', 'kg', 1.99, 20)).toHaveProperty('price', 1.99);
    expect(createItem('banana', 'kg', 1.99, 20)).toHaveProperty('quantity', 20);
    expect(createItem('banana', 'kg', 1.99, 20)).toHaveProperty('unit', 'kg');
  });
  it('utiliza zero como quantidade padrão', () => {
    expect(createItem('abacaxi', 't', 2315.59)).toHaveProperty('quantity', 0);
  });
  it('Lança um erro quando não recebe parâmetros', () => {
    expect(() => createItem()).toThrow(Error);
  });
  it('Lança um erro se o nome do item não é uma string', () => {
    expect(() => {createItem(645, 'kg', 5.46, 2)}).toThrow(Error);
  });
  it('Lança um erro se o preço é negativo', () => {
    expect(() => {createItem('abacaxi', 't', -2315.59, 5)}).toThrow(Error);
  });
  it('Lança um erro se o preço é zero', () => {
    expect(() => {createItem('melancia', 't', 0, 10)}).toThrow(Error);
  });
});
