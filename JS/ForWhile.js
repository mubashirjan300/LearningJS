// GENERAL LOOPS: for, while, do-while

for (let i = 0; i < 50; i++) //first it will assign 0 to i, then it will check the condition i<50; and when the condition is true, it will print i; and lastly it will increment the value of i with 1
{
    // console.log(i)
}

// ++ OPERATOR MEANS ADD 1

let a = 34;
a++; // or we can write this as a+=1
// console.log(a);


// WHILE LOOP:

let j = 0;
while (j < 10) {
    // console.log(j);
    // console.log(j+1) // if we want the value to be printed from 1 and not 0
    j++;
}

// DO-WHILE LOOP:

let m = 0;
do {
    // console.log(m + 1);
    m++;
}
while (m < 10);


//THERE ARE TWO STATEMENTS IN A LOOP - BREAK & CONTINUE
// --------------------------------------------------------

for (let aa = 0; aa < 10; aa++)
{
    // console.log(aa+1);
    if(aa === 5){
        break;
    }
}
// console.log('done');

for (let b = 0; b<10; b++)
{
    if(b===5 || b===9)
    {
        continue;
    }
    // console.log(b);
}

// let arr = [1, 2, 3, 4];
// for (let x = 0; x<arr.length; x++){
//     console.log(arr[x]);
//     if(arr[x]===4){
//         console.log(arr[x], 'hi');
//     }
// }

