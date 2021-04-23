var fs = require('fs')
var event = require('events')

var emitter = new event.EventEmitter()

emitter.on('data', (data) => {
    fs.mkdir('stuff', function(){
        fs.writeFile('./stuff/write.txt', data, {flag: 'a+' }, err=>{
        })
    })
})


emitter.emit('data', "adding data")