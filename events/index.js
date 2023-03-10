const EventEmitter = require('events')

class MeuEmissor extends EventEmitter {}

const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:click'

meuEmissor.on(nomeEvento, function (click) {
  console.log('um usuario clicou', click)
})

meuEmissor.emit(nomeEvento, 'barra de rolagem')

//pega dado do console
const stdin = process.openStdin()
stdin.addListener('data', function(value){
    console.log(`usuario digitou: .. ${value.toString().trim()}`)
}) 