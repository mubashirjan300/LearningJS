//IF AND ELSE-IF STATEMENTS

const age = '65'; //age is now a string

if(age==19) //== is a comaprison operator and only check value of var
{
    // console.log('Age is showing 19')
}

else if(age === 65) { //=== is used to compare type and value assigned to var
    // console.log('Age is Sixty Five ')
}
else{
    // console.log('Age is not 19')
}

/*If we convert age 65 into string, the result will still be 65.
This is because == operator just check the VALUE assigned to a var
 It does not check the TYPE of value assigned to the variable
 TO CHEC A TYPE AND VALUE ASSIGNED TO A VAR, WE USE === OPERATOR
 */

//USING != NOT EQUAL TO OPERATOR ASSIGNMENT
 const age1 = 55;
 
 if(age1 != 52) {
    //  console.log('Age1 is not equal to 55')
 }

 else if(age1 == 44){
    //  console.log('Age is 44')
 }
 else {
    //  console.log('Age is not defined at all')
 }

 //TO CHECK IF A PARTICULAR VARIABLE IS DEFINED OR NOT

let msg = 88;
if(typeof msg !== 'undefined'){
    // console.log('Message is defined and the type is an Integer')
}

else{
    // console.log('message is not defined')
}

//USING BOOLEAN 
let doesDrive = true;
if(doesDrive==true){
    // console.log('I can drive')
}
else{
    // console.log('I cannot drive')
}

//USING AND

const umar = 44;
const drive = true;
if(umar>21 && drive==true){
    // console.log('I can drive')
}
else{
    // console.log('I cannot drive')
}

// USING OR ||

let ag = 7;
let gender = 'male';
let adult = true;

// if(ag>4 || gender =='male'){
//     console.log('His age is Ok and he can be admitted to skool')
// }
// else if(gender=='male' && adult==true){
//     console.log('He can be admitted')
// }
// else {
//     console.log('She cannot be admitted')
// }

// USING TURNARY OPERATOR

// console.log(ag==4? 'Age is 4' : 'Age is different');

// SWITCH STATEMENTS

// let agee=38;
// switch (agee) {
//     case 18:
//         console.log('You are 18yrs old');
//         break;
//     case 28:
//         console.log('You are 28');
//         break;
//     case 38:
//         console.log('You are 38');
//         break;

//     default:
//         console.log('You are not eligible');
//         break;
// }

let x=new Date().getDay() //getDay() is a library function for Date(). the getDay() method returns the weekday as a number between 0 and 6
switch(x){
    case 0:
        console.log('Today is Sunday');
        break;
    case 6:
        console.log('Today is Saturday');
        break;
        
}
console.log(x)