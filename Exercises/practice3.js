/*
    Case 3: Find the maximum number in a dynamic array. (A dynamic array can change their length)
    Input:
    const array_sample = [[1,2,3], [4,5,6], [7,8,9]]
    Output:
    “Maximum number is 9.”
*/

const array_sample = [
//   0  1  2   
    [1, 2, 3], // 0
//   0  1  2
    [4, 5, 6, 100], // 1
//   0  1  2
    [7, 8, 9]  // 2
];

// console.log(array_sample[0]);
console.log(array_sample[1]);
console.log(array_sample[1][1]); // 5
console.log(array_sample[2][3]); // undefined
console.log(array_sample[2][0]); // 7
console.log(array_sample[1][3]); // 100

let maximum = array_sample[0][0];
for(let outer = 0; outer < array_sample.length; outer++){
    console.log(array_sample[outer]);
    // for loop - inner arrays
    for(let inner = 0; inner < array_sample[outer].length; inner++){
        console.log(`array_sample[${outer}][${inner}] = ${array_sample[outer][inner]}`);
        if(maximum < array_sample[outer][inner]){
            maximum = array_sample[outer][inner];
        }
    }
}

console.log(`Maximum number is ${maximum}`);