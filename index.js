//      first       second      third
for(let index = 0; index < 10; index++){
    console.log(index);
}

// for keyword - indicator that the following block of code is for a for loop
// first value - starting index
// second value - condition
// third value - step
// index++ - index = index + 1

// Process:
// 1. Checks the value of the variable
// 2. Checks whether is agrees with the condition
// 3.1 If the condition is true, it performs the code block
// 3.2 If the condition is false, it will stop the loop
// 4. (optional) if 3.1 is met, Increment/Decrement the value of the variable
// 5. (optional) if 3.1 is met, Repeat process along with the new value of our variable

console.log("=================================");

for(let index = 5; index > 0; index--){
    console.log(index);
    console.log("Hello");
}

console.log("=================================");

let studentArray = ["John", "Victor", "Amanda", "Dom"];
for(let index = 0; index < studentArray.length; index++){
    console.log(index);
    console.log(studentArray[index]);
}

console.log("=================================");

// Print only the numbers divisible by 3
let numArray = [2,3,4,5,6,7,8,9];
for(let index = 0; index < numArray.length; index++){
    if(numArray[index] % 3 === 0){
        console.log(numArray[index]);
    }
}

console.log("=================================");

const building = 4;
const floor = 3;

// outer loop
for(let i = 1; i <= building; i++){
    console.log(`building ${i}`);
    // inner loop
    for(let j = 1; j <= floor; j++){
        console.log(`building ${i} floor ${j}`);
    }
}

// building 1
// building 1 floor 1
// building 1 floor 2
// building 1 floor 3
// building 2
// building 2 floor 1
// building 2 floor 2
// building 2 floor 3
// building 3
// building 3 floor 1
// building 3 floor 2
// building 3 floor 3
// building 4
// building 4 floor 1
// building 4 floor 2
// building 4 floor 3