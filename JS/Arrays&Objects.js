const fruits = ['Orange', 'Banana', 'Watermelon'];
const marks = [54, 45, 87, 66];
const mixed = ['Mango', 73, 665, [4, 10, 90]];

// console.log(fruits);
// console.log(marks);
// console.log(mixed);

//another method for Arrays
// ============================
const arr = new Array(23, 55, 34, 'Pineapple');
// console.log(arr);

/*Arrays has two things:
1. Properties
2. Methods
*/

//PROPERTIES
const arr1 = new Array(1, 2, 3, 'Avacado');
// console.log(arr1.length); // GIVES THE LENGTH OF AN ARRAY - 4
// console.log(arr1);
//to check whether a particular list is an array or not

// console.log(Array.isArray(arr1)); // IS ARRAY - GIVES THE VALUE TRUE
// console.log(Array.isArray('dfdfsf')); // NOT ARRAY - GIVES THE VALUE FALSE

//TO CHANGE A PARTICULAR OBJECT IN AN ARRAY
arr1[3] = 'Papaya';
// console.log(arr1);

//TO SHOW A PARTICULAR OBJECT IN AN ARRAY
let arrayy = arr1[0];
// console.log('the element is :', arrayy);

let marksValue = marks.indexOf(87);
console.log(marksValue);