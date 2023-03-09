function obterUsuario(callback) {
  setTimeout(function () {
    return callback(null, {
      id: 1,
      nome: 'javali',
      dataNascimen: new Date(),
    })
  }, 1000)
}

function obterTelefone(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      telefone: 'xx 0000-000',
    })
  }, 2000)
}

function obterEndereco(idUsuario, callback) {
  setTimeout(function () {
    return callback(null, {
      rua: 'pinheiros',
      numero: 53,
    })
  }, 2000)
}

function resolverUsuario(err, usuario) {
  console.log('usuário: ', usuario)
}

obterUsuario(function resolverUsuario(error, usuario) {
  //null ou "" ou 0 === false
  if (error) {
    console.log('deu erro em usuario', error)
    return
  }

  obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
    if (error1) {
      console.log('deu erro em telefone', error)
      return
    }
    obterEndereco(usuario.id, function resolverEndereço(error2, endereco) {
      if (error2) {
        console.log('deu erro em telefone', error)
        return
      }

      console.log(`
      Nome: ${usuario.nome},
      Endereço: ${endereco.rua},
      Telefone: ${telefone.telefone}`)
    })
  })
})
// const telefone = obterTelefone(usuario.id)
// console.log('tel: ', telefone)
