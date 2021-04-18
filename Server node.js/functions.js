function callFunction(fun){
    fun()
}

var bye = function(){
    console.log("bye")
}

//parsing variable to callfunction which holds the function 
callFunction(bye)


function myParseFunction(test){
    test()
}


let myFunction = function(){
    var count = 4
    console.log(`2 + 2 = ${count}`)
}

myParseFunction(myFunction)


