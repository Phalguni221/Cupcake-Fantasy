//set Princess Peach movements
// let modifier = 50;
// document.addEventListener('keydown', (event) => {
//     let princess = document.querySelector(".PrincessPeach");
//     let cloud = 0

//     princess.style.left = "0px"
//     princess.style.top = "0px"

//     switch (event.key) {
//         case "ArrowUp": princess.style.top = `${parseInt(princess.style.top) - modifier - cloud}px`; break;
//         case "ArrowDown": princess.style.top = `${parseInt(princess.style.top) + modifier + cloud}px`; break;
//         case "ArrowLeft": princess.style.left = `${parseInt(princess.style.left) - modifier - cloud}px`; break;
//         case "ArrowRight": princess.style.left = `${parseInt(princess.style.left) + modifier + cloud}px`; break;
//     }
//     console.log(event.key);
// });

// for (let i = 0;  i < 70; i++) {
//     let prin = parseInt(princess.style.left)
//     let x = parseInt(squares[i].left)
// if (x < prin || prin < x + 100) {
//     let prin1 = parseInt(princess.style.top)
//     let y = parseInt(squares[i].top)
//     if ( y < prin1 || prin1 < y + 100) {
//         console.log("collision")

//     }
// }
// }

// //Set the grid for the cupcakes falling from the sky
// const grid = document.querySelector('.grid')
// const grid2 = document.querySelector('.grid2')
// const DisplayResults = document.querySelector('.results')
// let currentCollectorIndex = 50
// let width = 15
// let height = 30

// let direction = 1
// let cupcakesId = 1
// let goingRight = true


// //grid 1
// for (let i = 0;  i < 70; i++) {
//     const squares = document.createElement('div')
//     grid.appendChild(squares)
// }

// const squares = grid.children

// //grid2
// for (let i = 0;  i < 70; i++) {
//     const squares2 = document.createElement('div')
//     grid2.appendChild(squares)
// }

// const squares2 = grid2.children


// //Add and remove the cupcakes
// function draw() {
//     for (let i = 0; i < cupcake.length; i++) {
//         squares[cupcakes[i]].classList.add('cupcake')
//     }
// }


// function removeCupcake() {
//     for (let i = 0; i < cupcakes.length; i++) {
//         squares[cupcakes[i]].classList.remove('cupcake')
//     }
    
// }

// squares[currentCollectorIndex].classList.add('PrincessPeach')

// //
// function movePicture(e) {
//     squares[currentCollectorIndex].classList.remove('PrincessPeach')
//     switch (e.key) {
//         case "ArrowUp": if (currentCollectorIndex % height < height - 1) currentCollectorIndex -= 1
//             break
//         case "ArrowDown": if (currentCollectorIndex % height < height - 1) currentCollectorIndex += 1
//             break
//         case "ArrowLeft": if (currentCollectorIndex % width !== 0) currentCollectorIndex -= 1
//             break
//         case "ArrowRight": if (currentCollectorIndex % width < width - 1) currentCollectorIndex += 1
//             break
//     }
//     squares[currentCollectorIndex].classList.remove('PrincessPeach')
// }

// document.addEventListener('keydown', movePicture)

// function moveCupcakes() {
//     const leftEdge = cupcakes[0] % width === 0
//     const rightEdge = cupcakes[cupcakes.length - 1] % width === width - 1
// }



