var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps", 
            "passenger seat": "crumbs",
            "list": [
                "back",
                "front"
            ]
        }, 
        "outside": {
            "trunk": "jacks"
        }
    },

    "truck": {
        "inside": {
            "glove box" : "maps"
            ,"passenger seat": "crumbs"
        }, 

        "outside": {
            "trunk": "jacks"
        }
    }
};

var myNewStorage = 
[{ //have to access using array index        
        type: "car",
        list: [
            "glove box",
            "passenger seat"
        ],
    },
    {
        type: "truck",
        list: [
            "glove box",
            "passenger seat"
        ]
    }
    
]; //use square brackets

console.log(myStorage["car"]["inside"]["glove box"]) //nested loops can be accesed through arrays
console.log(myStorage.car.inside["glove box"]); //must be in array to access the property otherwise an error can occur
console.log(myNewStorage[0].list[0]) //prints glove box from truck type
console.log(myStorage["car"]["inside"]["list"][0]);
