const { AllProducts } = require('./service')

Array.prototype.meuReduce = function (callback, valorInicial) {
  let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0]
  for (let index = 0; index <= this.length - 1; index++) {
    valorFinal = callback(valorFinal, this[index], this)
  }
  return valorFinal
}

async function main() {
  try {
    const results = await AllProducts()
    const precos = results.map((item) => item.price)
    console.log('Preços: ', precos)

    const total = precos.reduce((anterior, proximo) => {
      return anterior + proximo
    }, 0)

    console.log('total', total)
  } catch (error) {
    console.error(`DEU RUIM`, error)
  }
}

//exemplo de reduce com concatenação
// const minhaLista = [
//     ['karine', 'cos'],
//     ['chowchow', 'cachorro'],
//   ]

//   const total = minhaLista
//   .meuReduce((anterior, proximo) => {
//     return anterior.concat(proximo)
//   }, [])
//   .join(', ')

main()
