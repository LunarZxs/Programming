function myfunction(fun){
    fun()
}

var goodbye = function(){
    console.log("Goodbye")
}

var userInfo = "Ranul"

var i = function(s){
    console.log(s);
}

var newCheck =  function(check){
    console.log(check)
}

function journey(user){
    console.log(user)
}


module.exports ={ 
    i : i,
    myfunction:myfunction(goodbye),
    newCheck : newCheck,
    journey : journey,
    userInfo: userInfo
}