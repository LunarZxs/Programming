//corresponding functions happpening at the sametime 

setTimeout(function(){
    console.log("3 seconds has passed");
}, 3000);

var count = 0

var time  = setInterval(function(){
    console.log(count)

    count++

    if(count == 5){
        clearInterval(time)
    }

}, 1000)

var use;
let counter = 0

myfunc()

function myfunc(){
    use = setInterval(newFunc, 2000)


}

function newFunc(){
    console.log("hello world")

    if(counter > 5){
        clearInterval(use)
    }

    counter+=1
}

