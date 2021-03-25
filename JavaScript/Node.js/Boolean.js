function welcomeToBooleans(isTrue)
{
    if(isTrue){

        return "This is the return string for true";
        
    }

    else{
        return "This is the false string"
    }
}

function testingTrue(checkValue)
{
    if(checkValue === 1){ //if string 1 is passed then it will evaluate as false
        return "True"
    }

    else{
        return "false"
    }
}

console.log(testingTrue(2))

statement = welcomeToBooleans(true);

console.log(statement)