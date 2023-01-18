const grid = document.querySelector('.container-grid');
const rgbButton = document.querySelector('#rgb-btn');
const eraseButton = document.querySelector('#erase-btn');

const DEF_RES = 20;
const MAX_RES = 100;
const sliderInput = document.querySelector('#myRange');
const sliderOutput = document.querySelector('#range-output');
const drawButton = document.querySelector('#draw-btn')
setRes(DEF_RES);
let currMode = 0;
function getRandColor(){
    randomColor =  Math.floor(Math.random()*16777215).toString(16);
    return '#' + randomColor;
}
const buttons = document.querySelectorAll('button');

sliderInput.addEventListener("input",(e)=>{
    newRes = e.target.value;
    setRes(newRes);
    sliderOutput.textContent =  `grid-size: ${newRes}x${newRes}`;
})


buttons.forEach((button)=>{
    button.addEventListener('mouseover',function(e){
        button.classList.add('hovered')
    })

    button.addEventListener('mouseout',()=>{
        button.classList.remove('hovered');
    })
})


drawButton.addEventListener('click',()=>{
    currMode = 0;
})

rgbButton.addEventListener('click',()=>{
    currMode = 2;
})

eraseButton.addEventListener('click',()=>{
    currMode = 1;
})

function setRes(dimension){
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }

    if(dimension < 0){
        dimension = DEF_RES;
    } 
    if(dimension > 100){
        dimension = MAX_RES;
    }

    grid.style.gridTemplateColumns = `repeat(${dimension}, auto)`
    grid.style.gridTemplateRows = `repeat(${dimension}, auto)`

    for(let i =0;i< dimension * dimension;i++){
        let newCell = document.createElement('div');
        newCell.classList.add('grid-cell');
        newCell.addEventListener('mouseover', function(e){
            switch (currMode){
                case 0:
                    newCell.style.backgroundColor = 'black';
                    break;
                case 1 :
                    newCell.style.backgroundColor = 'gray';
                    break;
                case 2:
                    newCell.style.backgroundColor = getRandColor();
                    
     
                    
            }
        })
        grid.appendChild(newCell);
    }
};

dimensionButton = document.querySelector('button.dimension-btn');
dimensionButton.addEventListener('click',()=>{
    setRes(prompt("Enter new dimension"));
});



colorButton = document.querySelector('button.color-btn');
colorButton.addEventListener('click',()=>{
    currColor = prompt("Enter Color");
});

