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

var event = require('events')
var user = new event.EventEmitter() 


user.on('event', function(x){
    fs.writeFile('writeMe.txt', '\n' + x, {flag: 'a+'}, err =>{})
})

user.emit('event', username)

var util = require('util')
var emitter = require('events')

function myStream(){
    emitter.call(this)
}

util.inherits(myStream, emitter);

myStream.prototype.write = function(data) {
    this.emit('data', data);
  };

const stream = new myStream();

stream.on('data', (data) => {
    console.log(`Received data: "${data}"`);
    var dataFile = `Received data: "${data}"`
    fs.writeFile('writeMe.txt', '\n' + dataFile, {flag: 'a+'}, err=>{})
  });

stream.write('It works!')


