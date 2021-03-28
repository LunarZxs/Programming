const arr1 = ['Jan', 'Feb', 'Mar', 'Apr'];

let arr2;

(function(){
    arr2 = arr1;
    arr1[0] = 'potato'
})();

console.log(arr2); //arr2 is pointed to arr1

const arr3 = ['Jan', 'Feb', 'Mar', 'Apr'];

let arr4;

(function(){
    arr4 = [...arr3]; //getting the contents of the original array
    arr3[0] = 'potato'
})();
 
console.log(arr4);