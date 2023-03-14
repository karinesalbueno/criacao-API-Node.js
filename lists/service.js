const axios = require('axios')
const URL = `https://fakestoreapi.com`

async function AllProducts() {
    const url = `${URL}/products`
    const response = await axios.get(url)
    return response.data
  }

async function FilterProduct(name) {
  const url = `${URL}/products/${name}`
  const response = await axios.get(url)
  return response.data
}

// exportar modulo para conseguir acessar em outros arquivos
module.exports = {
  // nome chave igual ao valor entao nao precisa passar valor
  AllProducts,
  FilterProduct,
}
