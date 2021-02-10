//  TO GIVE SPACE BETWEEN TWO VARIABLES, WE USE ''
const name = 'MubashirJan';
const msg = 'Good morning';
// console.log(name + ' ' + msg);

//TO COMBINE TWO STRING, WE USE concat() function
let html = 'hello';
html = html.concat(' this', ' is my', ' demo');
// console.log(html);

// alternate method for concat() function
let html1 = 'Hello ';
let html2 = 'World going.';
let html3 = 'whats going on?';
let html4 = 'The type of data is: ';

let http = html1.concat(html2, html3);
// console.log(http.length, (typeof http));

//TO CONVERT ALL THE CHARACTERS TO LOWERCASE/UPPERCASE, 
// WE USE toLowerCase() / toUpperCase() function
// console.log(http.toUpperCase());
// console.log(http.toLowerCase(), html4, (typeof http));

// INDEXING
// console.log(http[6]);
// console.log(http.charAt(6)); // alternate method to the above http[6]
// console.log(http.indexOf('W')); //to know the index of a specific character
// console.log(http.lastIndexOf('g')); //this will give you last index of 'g'
// console.log(http.endsWith('?')); // tells us whether a string endswith '?'
// console.log(http.includes('World')); // tells us whether a particular character or word is included in the string
// console.log(http.substring(4,9)); //gives us the character starting from 0 and n-1
// console.log(http.slice(-12));//same function as substring() except slice() take negative values
// console.log(http.split('going')); //splits a string and convert it into an array
// console.log(http.replace('World', 'Bitches')); //replace first occurance of a string


//USE OF TEMPLATES LITERALS or TEMPLATE STRINGS
// -----------------------------------------------
///BAPTICS (TEMPLATE LITERAL; CAME IN ES6) USE. ${} use is when we want to include variable declared and assigned
let f1 = 'Banana-\''; //if we want to include ' in a string, we use \'      
let f2 = 'Apple';
let myFruits = `Hello ${name}  <br> 
<h1>This is example of Heading ${f1}</h>
<p>My name is ${name}</p> <p> and i like ${f1} more than ${f2}</p>`;
// document.getElementById("subtag").innerHTML = myFruits
document.body.innerHTML = myFruits;

