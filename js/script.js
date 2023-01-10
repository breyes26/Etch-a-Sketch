const grid = document.querySelector('.container-grid');

currColor = 'purple';

function setRes(dimension){
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
 
    grid.style.gridTemplateColumns = `repeat(${dimension}, auto)`
    grid.style.gridTemplateRows = `repeat(${dimension}, auto)`

    for(let i =0;i< dimension * dimension;i++){
        let newCell = document.createElement('div');
        newCell.classList.add('grid-cell');
        newCell.addEventListener('mouseover', function(e){
            let rc = Math.floor(Math.random()*16777215).toString(16)
            newCell.style.backgroundColor = currColor;
        })
        grid.appendChild(newCell);
    }
}

dimensionButton = document.querySelector('button.dimension-btn');
dimensionButton.addEventListener('click',()=>{
    setRes(prompt("Enter new dimension"));
})



colorButton = document.querySelector('button.color-btn');
colorButton.addEventListener('click',()=>{
    currColor = prompt("Enter Color");
})
