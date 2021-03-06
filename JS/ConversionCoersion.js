// TYPE CONVERSION AND TYPE COERCION 

// TYPE CONVERSION
// --------------------

// CONVERSION USING 'String()' function
// ---------------------------------------
let myVar = String(34);
// console.log('myVar data type is ' + typeof myVar);

let myVar1 = 444;
// console.log('Data type of myVar1 is ',(typeof myVar1));

let booleanVar = String(true);
// console.log(booleanVar, typeof booleanVar);

let date = new Date();
// console.log(date, (typeof date));

// CONVERSION FROM NUMBER TO DATE USING 'new Date()' functions
// --------------------------------------------------------------

// let num = 174652637875;
let num = new Date(174652637875);
// console.log(num, typeof num);

let arr = [43, 23, 56, 43];
// console.log(arr, (typeof arr));

let arr1_1 = [34, 565, 746, 999];
// console.log(arr1_1.length, (typeof arr1_1));

let arr2 = String([1, 2, 3, 4]);
// console.log(arr2, (typeof arr2));

let arr2_1 = String([33,22,22,88]);
// console.log(arr2_1.length, typeof arr2_1);

//WE CAN ALSO CHANGE THE TYPE OF DATA FROM NUMBER TO STRING 
// USING 'TOSTRING()' function - NUMBER TO STRING
//---------------------------------------------------------

// SYNTAX 1
// let i = 8;
// i = i.toString();
// console.log(i, typeof i);

// SYNTAX 2
// let i = String(8);
// console.log(i, typeof i);

//WE CAN CONVERT FROM STRING TO NUMBER USING NUMBER() function
//------------------------------------------------------------

//let stri = "45454";
// let stri = Number("45454");
// stri = Number("4545f4");
// let stri = Number(true);
// let stri = Number(false);
// let stri = true;
let stri = true;
stri = stri.toString();
console.log(stri.length, (typeof stri));

//CONVERTING STRING TO NUMBER USING 'ParseInt()' function
// ---------------------------------------------------------

let number = parseFloat('54.88');
// number = parseInt('54.88');
// let number = 66;
// number = number.toString();
console.log(number.toFixed(5), (typeof number));

//toFixed() function is used to show the number of int after decimal

//CONVERTING NUMBER INTO FLOAT USING 'parseFloat() function
// -----------------------------------------------------------

let n1 = parseFloat('54.003');
console.log(n1.toFixed(7), (typeof n1));

//TO SHOW THE NUMBER OF DECIMELS, WE USE toFixed() function
// -----------------------------------------------------------

let n2 = parseFloat('85.0978');
console.log(n2.toFixed(6), (typeof n2));

//zamara taspakoo

let markss = parseFloat('54.04888');
// markss = markss.toString();
console.log(markss.toFixed(5),(typeof markss));

//TYPE COERCION
//If we wanna add a string with a number or 
// a number with a string


let myStr = "546";
let myNum = 44;
console.log(myStr + myNum); //output will be 54644

//If we convert the myStr into number; the output will be different
let myStr1 = Number("546");
let myNum1 = 444;
console.log(myStr1 + myNum1);
