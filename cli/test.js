const { deepEqual, ok } = require('assert')
const database = require('./database')

const DEFAULT_ITEM_CADASTRAR = {
  nome: 'superman',
  poder: 'força',
  id: 1,
}

describe('Listar - manipulação herois', () => {
  before(async () => {
    await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
  })
  it('deve pesquisar heroi usando arquivos', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR
    // desestruturação: entre chaves pegando apenas a 1º posiçao do array
    // listando usuario por um id específico
    const [result] = await database.listar(expected.id)
    console.log(result)
    deepEqual(result, expected)
  })
})

describe('Cadastrar - manipulação herois', () => {
  it('deve cadastrar um heroi usando arquivos', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR
    const result = await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
    const [actual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id)

    deepEqual(actual, expected)
  })
})
