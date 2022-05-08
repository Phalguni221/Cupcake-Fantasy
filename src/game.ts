//set Princess Peach movements


let modifier:number = 50;
document.addEventListener('keydown', (event) => {
        let princess:any= document.querySelector(".PrincessPeach");
        let cloud: number = 0;


    princess.style.left = "0px"
    princess.style.top = "0px"

  
    switch (event.key) {
        case "ArrowUp": princess.style.top = `${parseInt(princess.style.top) - modifier - cloud}px`; break;
        case "ArrowDown": princess.style.top = `${parseInt(princess.style.top) + modifier + cloud}px`; break;
        case "ArrowLeft": princess.style.left = `${parseInt(princess.style.left) - modifier - cloud}px`; break;
        case "ArrowRight": princess.style.left = `${parseInt(princess.style.left) + modifier + cloud}px`; break;
    }
    console.log(event.key);
});

let princess:any = document.querySelector(".PrincessPeach");


const grid:any = document.querySelector('.grid')
const squares:any = grid.children

//Set the grid for the cupcakesId falling from the sky

const DisplayResults = document.querySelector('.results')
let currentCollectorIndex:number = 50
let width:number = 15
let height:number = 30

let direction:number = 1
let cupcakesId:any = 1
let goingRight:boolean = true


for (let i = 0;  i < 70; i++) {
    let prin = parseInt(princess.style.left)
    let x = parseInt(squares[i].left)
if (x < prin || prin < x + 100) {
    let prin1 = parseInt(princess.style.top)
    let y = parseInt(squares[i].top)
    if ( y < prin1 || prin1 < y + 100) {
        console.log("collision")
    }
}
}


//grid 1
for (let i = 0;  i < 70; i++) {
    const squares = document.createElement('div')
    grid.appendChild(squares)
}





//Add and remove the cupcakesId
function draw() {
    for (let i = 0; i < cupcakesId.length; i++) {
        squares[cupcakesId[i]].classList.add('cupcake')
    }
}


function removeCupcake() {
    for (let i = 0; i < cupcakesId.length; i++) {
        squares[cupcakesId[i]].classList.remove('cupcake')
    }
    
}

squares[currentCollectorIndex].classList.add('PrincessPeach')

//
function movePicture(e:any) {
    squares[currentCollectorIndex].classList.remove('PrincessPeach')
    switch (e.key) {
        case "ArrowUp": if (currentCollectorIndex % height < height - 1) currentCollectorIndex -= 1
            break
        case "ArrowDown": if (currentCollectorIndex % height < height - 1) currentCollectorIndex += 1
            break
        case "ArrowLeft": if (currentCollectorIndex % width !== 0) currentCollectorIndex -= 1
            break
        case "ArrowRight": if (currentCollectorIndex % width < width - 1) currentCollectorIndex += 1
            break
    }
    squares[currentCollectorIndex].classList.remove('PrincessPeach')
}

document.addEventListener('keydown', movePicture)

function movecupcakesId() {
    const leftEdge = cupcakesId[0] % width === 0
    const rightEdge = cupcakesId[cupcakesId.length - 1] % width === width - 1
}



