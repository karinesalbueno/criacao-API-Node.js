const { get } = require('axios')

const URL = `https://fakestoreapi.com`

async function FilterProductTest(id) {
  const url = `${URL}/products/${id}`
  const res = await get(url)
  const value = [res.data]
  return value.map(mappingProducts)
}

function mappingProducts(item) {
  return {
    nome: item.title,
    imagem: item.image,
  }
}

module.exports = {
  FilterProductTest,
}
