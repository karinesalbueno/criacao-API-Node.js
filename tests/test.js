const assert = require('assert')
const { FilterProductTest } = require('./service')

// pacote nock para simular requisições
const nock = require('nock')

describe('Store Api test', function () {
  this.beforeEach(() => {
    const res = {
      id: 7,
      title: 'White Gold Plated Princess',
      price: 9.99,
      description: `Classic Created Wedding Engagement Solitaire Diamond Promise Ring 
      for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...`,
      category: 'jewelery',
      image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
      rating: { rate: 3, count: 400 },
    }

    nock(`https://fakestoreapi.com`).get(`/products/7`).reply(200, res)
  })

  it('deve buscar o item 7 da forma correta', async () => {
    const expected = [
      {
        nome: 'White Gold Plated Princess',
        imagem:
          'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
      },
    ]
    const idBase = `7`
    const resultado = await FilterProductTest(idBase)
    assert.deepEqual(resultado, expected)
  })
})
