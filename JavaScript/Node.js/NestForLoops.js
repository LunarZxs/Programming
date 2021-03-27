function multiply(arr)
{
    var product = 1;
    
    for(var i = 0; i < arr.length; i++)
    {
        for(var j = 0; j < arr[i].length; j++)
        {
            product *= arr[i][j];
        }
    }
    return product;
}
user = [[1,2], [3,4], [5,6,7]]; //use double sqaure brackets for double arrays
//       0      1       2

var product = multiply(user);
console.log(product);