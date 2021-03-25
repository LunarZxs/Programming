function caseInSwitch(val)
{
    var ans = "";

    switch(val){
        case 1:
            ans = "alpha";
        
        case 2:
            ans = "beta";
                
        case 3:
            ans = "gamma";
        
        case 4:
            ans = "delta";

    }

    return ans;
}

console.log(caseInSwitch(1));