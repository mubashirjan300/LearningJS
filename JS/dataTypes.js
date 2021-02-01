/*
TWO TYPES:
1. Primitive Data Type 
    memory allocation is in stack
    STRING, NUMBER, BOOLEAN, NULL, UNDEFINED, SYMBOL

2. Reference Data type
memory allocation is in Heap (dymanic)
ARRAYS, OBJECT LITERALS, FUNCTIONS, DATES
*/

//STRING
let name = 'Mubashir';
console.log('My name is '  + name);
console.log('Data type is ' + (typeof name));


// NUMBERS
let digits = 43;
console.log('3rd data type is ' + (typeof digits));

// BOOLEAN
let isDriver = true;
console.log('4th data type is ' + (typeof isDriver));

// NULL
let nullVar = null;
console.log('5th Data type is ' + (typeof nullVar));

//UNDEFINED
let undef = undefined;
console.log('6th data type is ' + (typeof undef));

//ARRAY
let digit = [54, 34, 55];
console.log('2nd Data type is ' + (typeof digit));

// OBJECT LITERALS
let stMarks = {
    harry: 54,
    Jan: 90,
    Mub: 98
}
console.log(stMarks);

//FUNCTIONS
function findName() {
    
}
console.log(typeof findName);

//DATES
let date = new Date();
console.log(typeof date);