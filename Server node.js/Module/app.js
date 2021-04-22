var j = require('./hello')

j.i("s")
j.newCheck("check")
j.newCheck('h')
console.log(j.userInfo)

var mod = require('events')
var emitter = new mod.EventEmitter()

emitter.on('someEvent', function(msg){
    console.log(msg)
})

emitter.emit('someEvent', 'event was emitted')


var checkEvent = require('events')
var emitEvent = new checkEvent.EventEmitter()

emitEvent.on(j.userInfo, function(x){
    if(j.userInfo == 'James'){
        console.log(x)
    }

    else{
        console.log((j.userInfo == 'James'))
    }
})

emitEvent.on('user', function(x){
    if(j.userInfo == 'Ranul'){
        console.log(x)
    }

    else{
        console.log((j.userInfo == 'James'))
    }
})

//the first arg to call the function to the event handler
emitEvent.emit('user', true)
emitEvent.emit(j.userInfo, true)

//This for the person event
var events = require('events')
var util = require('util')
const userInfo = require('./hello')

var Person = function(name){
    this.name = name
}


util.inherits(Person, events.EventEmitter)

var james = new Person('james')
var mary = new Person('mary')
var ryu = new Person('ryu')

var people = [james,mary, ryu]

people.forEach(function(person){
    person.on('speak', function(msg){
        console.log(person.name + ' said: ' + msg)
    })
})

james.emit('speak', 'hey guys')

console.log(j.count(['hello', 'Goodbye']))

