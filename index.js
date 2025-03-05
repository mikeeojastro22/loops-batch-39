//       first      second      third
for(let index = 0; index < 10; index++){
    console.log(index);
}

// for keyword - indicator that the following block of code is for a for loop
// first value - starting index
// second value - condition
// third value - step
// index = index + 1

// Process:
// 1. Checks the value of the variable
// 2. Checks whether it agrees with the condition
// 3.1 If the condition is met, it performs the code block
// 3.2 If the condition is not met, it will stop the loop
// 4. (optional) If 3.1 is met, Increment/Decrement the value of the variable
// 5. (optional) If 3.1 is met, repeat the process along with the new value of the variable

console.log("=============================");

for(let index = 5; index > 0; index--){
    console.log(index);
    console.log("Here");
}

console.log("=============================");

let studentArray = ["John", "Victor", "Amanda", "Dom"];
for(let element = 0; element < studentArray.length; element++){
    console.log(studentArray[element]);
}

console.log("=============================");

// print only the numbers divisible by 3
let numArray = [2,3,4,5,6,7,8,9,12];
for(let index = 0; index < numArray.length; index++){
    if(numArray[index] % 3 === 0){
        console.log(numArray[index]);
    }
}