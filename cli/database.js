// ler arquivo
const { readFile, writeFile } = require('fs')
// para que transforme objeto/funçao p promisse
const { promisify } = require('util')

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)

class Database {
  constructor() {
    this.NOME_ARQUIVO = 'herois.json'
  }

  async obterDadosArquivo() {
    const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8')
    return JSON.parse(arquivo.toString())
  }

  async listar(id) {
    const dados = await this.obterDadosArquivo()
    const dadosFiltrados = dados.filter((item) => (id ? item.id === id : true))
    return dadosFiltrados
  }

  async escreverArquivo(dados) {
    await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados))
    return true
  }

  async cadastrar(heroi) {
    const dados = await this.obterDadosArquivo()
    // simular criando um id
    const id = heroi.id <= 2 ? heroi.id : Date.now()

    const heroiComIDConcatenacao = {
      id,
      ...heroi,
    }

    const dadosFinal = [...dados, heroiComIDConcatenacao]
    const resultado = await this.escreverArquivo(dadosFinal)
    return resultado
  }
}

module.exports = new Database()
