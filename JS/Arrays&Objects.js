//ARRAYS
// ==========

const fruits = ['Orange', 'Banana', 'Watermelon'];
let marks = [54, 45, 87, 66];
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

//PROPERTIES & METHODS
//DO NOT DECLARE STRING, NUMBERS AND BOOLEAN AS OBJECTS
// ========================================================
const arr1 = new Array(1, 2, 3, 'Avacado'); //using 'new' will convert the array into an array object
// console.log(arr1.length); // GIVES THE LENGTH OF AN ARRAY - 4
// console.log(arr1);

//to check whether a particular list is an array or not
// console.log(Array.isArray(arr1)); // IS ARRAY - GIVES THE VALUE TRUE
// console.log(Array.isArray('dfdfsf')); // NOT ARRAY - GIVES THE VALUE FALSE

//TO CHANGE A PARTICULAR OBJECT IN AN ARRAY
arr1[3] = 'Papaya';
// console.log(arr1);

//TO SHOW A PARTICULAR ELEMENT IN AN ARRAY
let arrayy = arr1[0];
// console.log('the element is :', arrayy);

//getting an index of an array
let marksValue = marks.indexOf(87); //method
// console.log(marksValue);

// to insert an element at END of array
marks.push(6455); //method
// console.log(marks);

//to insert an element at the BEGINNING of an array
marks.unshift('ladyFinger', [34, 23]); //method
// console.log(marks);

// to remove an element from the end of an array
marks.pop(); //method
// console.log(marks);

//to remove an element from the start of an array
marks.shift(); //method
// console.log(marks);

// to remove an specific elements from an array
marks.splice(1,2); // this method start removing elements from 1 
//and remove a total of two elements 
// console.log(marks);

// to reverse the elements of an array
marks.reverse(); //method
// console.log(marks);

// to concate arrays
let marks2 = [44, 77, 99];
mmarks = marks.concat(marks2);
// console.log(mmarks);

// OBJECTS
//USE ARRAYS WHEN WE WANT TO STORE ELEMENTS
//USE OBJECTS WHEN WE WANT TO STORE KEY:VALUE PAIR
// ==========

let myobj = {
    name : 'Mubashir',
    age : 31,
    employ : 'active',
    residence : [12, 32, 99]
}

// console.log(myobj);
// console.log('My name is : ' + ' ' +myobj.name + ' and I am ' + myobj.age + ' years old');
// console.log(myobj.residence);

//to access the elements inside an object, there are two methods
console.log(myobj.name); //method 1
console.log(myobj['residence']); // we have to use apostrophe // method 2