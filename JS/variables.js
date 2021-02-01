//VARIABLES IN JS
// var, let, const
var name = 'harry';
console.log(name);
var channel;
channel = 'discovery';
var digits = 43;
console.log(channel);

/*
            --------------------------------------------
DATA TYPES: INT, STRING, ARRAY, BOOLEAN, UNDEFINED, NULL
            ---------------------------------------------
            ARRAY is the collection of elements []
RULES FOR CREATING JS VARIABLES
1. Cannot start with number
2. Can start with Letter, numbers, _ or $
3. Are case sensitive 
 */

// In const, you cannot another value to a same variable
// In let, you can reassing values to a particular variable

const ownersname = 'Mubashir';
//ownersname = 'Jan' ; CANNOT ASSIGN ANOTHER VALUE TO SAME VARIABLE 'OWNERSNAME'
console.log(ownersname);

{
    let channel = 'discover';
    console.log(channel);
}

// ARRAY 
const arr1 = [34,24,'Mubashir',true];
arr1.push('Jan', 44);
console.log(arr1);

/* MOST COMMON PROGRAMMING CASE TYPES;

1. camelCase
2. kebab-case
3. snake_case
4. PascalCase

*/