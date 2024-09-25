const people = 58;

for(let index = 1; index <= people; index++){
    if(index % 2 == 0){
        console.log(index, 'blue team');
        // console.log(`${index} is in blue team`);
    } else {
        console.log(index, 'red team');
        // console.log(`${index} is in red team`);
    }
}