const fs = require('fs')

var readme = fs.readFileSync('readText', 'utf8')

 console.log(readme)

 fs.writeFileSync('writeMe.txt', readme)

//This is asynchronus meaning the file will be read at the same time
fs.readFile('readThis.txt', 'utf8', (err,data) =>{

      console.log(data)

      fs.writeFile('writeMe.txt', '\n' + data, {flag: 'a+'},err => {})
})

var req = require('./routes')
var username = req.userName
var func = req.myFunc

var event = require('events')
var emit = new event.EventEmitter()

emit.on('event', function(x){
    fs.writeFile('writeMe.txt', '\n' + x, {flag: 'a+'}, err =>{})
})

emit.emit('event', username)


