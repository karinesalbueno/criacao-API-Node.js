const assert = require('assert')
const { FilterProductTest } = require('./service')

describe('Store Api test', function () {
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
