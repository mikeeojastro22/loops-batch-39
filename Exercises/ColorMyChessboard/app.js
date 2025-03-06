const squares = Array.from(document.querySelectorAll('.grid div'))

// console.log(squares);

// squares[0].classList.add("even");
// squares[1].classList.add("odd");

for(let box = 0; box < squares.length; box++){
    if(box % 2 === 0) {
        squares[box].classList.add("even");
    } else {
        squares[box].classList.add("odd");
    }
}