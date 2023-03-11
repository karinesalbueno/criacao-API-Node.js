//callback para promises

const util = require('util')

obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
  //quando der problema : reject
  // qnd sucesso : resolve
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function () {
      // return reject(new Error('deu erro!!'))
      return resolve({
        id: 1,
        nome: 'javali',
        dataNascimen: new Date(),
      })
    }, 1000)
  })
}

function obterTelefone(idUsuario) {
  return new Promise(function resolverPromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        telefone: 'xx 0000-000',
      })
    }, 2000)
  })
}

// *formatar também

function obterEndereco(idUsuario, callback) {
  setTimeout(function () {
    return callback(null, {
      rua: 'pinheiros',
      numero: 53,
    })
  }, 2000)
}

// async- automaticamente retornará uma Promise
main()
async function main() {
  try {
    console.time()
    const usuario = await obterUsuario()

    const resultado = await Promise.all([
      obterEnderecoAsync(usuario.id),
      obterTelefone(usuario.id),
    ])
    const endereco = resultado[0]
    const telefone = resultado[1]

    console.log(`
        Nome: ${usuario.nome}
        Telefone: ${telefone.telefone}
        Endereço: ${endereco.rua}, ${endereco.numero}
    `)

    console.timeEnd()
  } catch (error) {
    console.log('erro', error)
  }
}

// const usuarioPromise = obterUsuario()

// usuarioPromise
//   .then(function (usuario) {
//     return obterTelefone(usuario.id).then(function resolverTelefone(result) {
//       return {
//         usuario: usuario,
//         telefone: result,
//       }
//     })
//   })
//   //recebe do then acima
//   .then(function (resultado) {
//     const endereco = obterEnderecoAsync(resultado.usuario.id)
//     return endereco.then(function resolverEndereço(result) {
//       return {
//         usuario: resultado.usuario,
//         telefone: resultado.telefone,
//         endereco: result,
//       }
//     })
//   })
//   .then(function (resultado) {
//     console.log(`
//       Nome: ${resultado.usuario.nome}
//       Endereço: ${resultado.endereco.rua},${resultado.endereco.numero}
//       Telefone: ${resultado.telefone.telefone}
//       `)
//   })
//   .catch(function (error) {
//     console.log('erro!!', error)
//   })

// obterUsuario(function resolverUsuario(error, usuario) {
//   //null ou "" ou 0 === false
//   if (error) {
//     console.log('deu erro em usuario', error)
//     return
//   }

//   obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
//     if (error1) {
//       console.log('deu erro em telefone', error)
//       return
//     }
//     obterEndereco(usuario.id, function resolverEndereço(error2, endereco) {
//       if (error2) {
//         console.log('deu erro em telefone', error)
//         return
//       }

//       console.log(`
//       Nome: ${usuario.nome},
//       Endereço: ${endereco.rua},
//       Telefone: ${telefone.telefone}`)
//     })
//   })
// })
