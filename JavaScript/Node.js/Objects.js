var obj = {
    "name": "Ranul",
    "age" : 12,
    "Hobbies" : "Testing"
};

var personAge = obj["name"]; //prints the property of the variable
obj.name = "newName" //setting a new variable for the property

console.log(obj["name"]); //name updated
obj["newProp"] = "Hello"; //adding a property 

console.log(obj); //prints all the objects in the variable

delete obj.Hobbies; //deletes the hobbies property

function checkObj(checkProp) //check if property exists
{
    if(obj.hasOwnProperty(checkProp))
    {
        return obj[checkProp];
    }
    else{
        return "Not Found";
    }
}

console.log(checkObj("name")); //prints the checked object