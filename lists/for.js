const { AllProducts, FilterProduct } = require('./service')

async function getAll() {
  try {
    const result = await AllProducts()
    // array com o nome de todos os produtos
    const names = []

    for (index of result) {
      names.push(index.title)
    }

    console.log(`names`, names)
  } catch (error) {
    console.error(`error interno`, error)
  }
}

async function Filter() {
  try {
    const result = await FilterProduct('7')
    // filtra um produto pelo id e retorna depois buscando a especificação

    const data = result

    console.log(`
    nome: ${data.title},
    imagem: ${data.image}
    `)
  } catch (error) {
    console.error(`error interno`, error)
  }
}

Filter()
getAll()
