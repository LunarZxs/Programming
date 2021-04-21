function myfunction(fun){
    fun()
}

var goodbye = function(){
    console.log("Goodbye")
}

var i = function(s){
    console.log(s);
}

var newCheck =  function(check){
    console.log(check)
}

module.exports = console.log("helo World")
module.exports = myfunction(goodbye)
module.exports = i
module.exports = newCheck