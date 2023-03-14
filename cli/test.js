const { deepEqual, ok } = require('assert')
const database = require('./database')

const DEFAULT_ITEM_CADASTRAR = {
  nome: 'superman',
  poder: 'força',
  id: 1,
}

const DEFAULT_ITEM_ATUALIZAR = {
  nome: 'mulher maravilha',
  poder: 'voar',
  id: 2,
}

describe('Manipulação herois', () => {
  before(async () => {
    await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
    await database.cadastrar(DEFAULT_ITEM_ATUALIZAR)
  })
  it('listar-deve pesquisar heroi usando arquivos', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR
    // desestruturação: entre chaves pegando apenas a 1º posiçao do array
    // listando usuario por um id específico
    const [result] = await database.listar(expected.id)
    console.log(result)
    deepEqual(result, expected)
  })

  it('Cadastrar- deve cadastrar um heroi usando arquivos', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR
    const result = await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
    const [actual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id)

    deepEqual(actual, expected)
  })

  it('Remover- deve remover um heroi pelo id', async () => {
    const expected = true
    const result = await database.remover(DEFAULT_ITEM_CADASTRAR.id)

    deepEqual(result, expected)
  })
  it('update- deve atualizar um heroi pelo id', async () => {
    const expected = { ...DEFAULT_ITEM_ATUALIZAR }
    const newData = {
      nome: 'coringa',
      poder: 'ser doido',
    }
    await database.atualizar(DEFAULT_ITEM_ATUALIZAR.id, newData)
    const [result] = await database.listar(DEFAULT_ITEM_ATUALIZAR.id)
    //objeto atual ser igual ao esperado
    deepEqual(result, expected)
  })
})
