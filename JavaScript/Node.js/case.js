function caseInSwitch(val)
{
    var ans = "";

    switch(val){
        case 1:
            ans = "alpha"; //without breack statement, it will follow through to the next case
            
        case 2:
            ans = "beta";
            break;
                
        case 3:
            ans = "gamma";
            break;
        
        case 4:
            ans = "delta";
            break;

    }

    return ans;
}

function caseNewInSwitch(val)
{
    var ans = "";

    switch(val){
        case "a":
            ans = "alpha";
            break;
        
        case "b":
            ans = "beta";
            break;
                
        case "c":
            ans = "gamma";
            break;
        default: //if conditions don't meet, this line is executed
            ans = "stuff";
            break;
        
        return ans;
    }

    return ans;
}


console.log(caseInSwitch(1));

console.log(caseNewInSwitch(1));