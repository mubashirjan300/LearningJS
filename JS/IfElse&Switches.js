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

let msg = 45;
if(typeof msg !== 'undefined'){
    console.log('Message is defined and the type is a String')
}

else{
    console.log('message is not defined')
}