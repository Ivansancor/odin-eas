const parentdiv = document.getElementById('parent-div');

let sideSize = 4;

for (let i = 0; i < sideSize*sideSize; i++){
    let newdiv = document.createElement('div');
    newdiv.classList.add('grid-div');
    parentdiv.appendChild(newdiv);
}


const newGrid = document.getElementsByClassName('grid-div');
for (let i = 0; i < sideSize*sideSize; i++){
    newGrid[i].addEventListener('mouseenter', colorDiv);
}

function colorDiv(e){
   for (let i = 0; i < sideSize*sideSize; i++){
       if (e.target == newGrid[i]){
           newGrid[i].style.backgroundColor = '#000';
           newGrid[i].style.border = "1px solid #fff";
           newGrid[i].removeEventListener('mouseenter', colorDiv);
           newGrid[i].removeEventListener('mouseenter', colorGreyDiv);
           newGrid[i].removeEventListener('mouseenter', colorRainbowDiv);
       }
   }
}

const buttonDiv = document.getElementById('button-div');
const restartBtn = document.createElement('button');
restartBtn.textContent = "B&W";
buttonDiv.appendChild(restartBtn);

const greyBtn = document.createElement('button');
greyBtn.textContent = "GREYSCALE";
buttonDiv.appendChild(greyBtn);

const rainbowBtn = document.createElement('button');
rainbowBtn.textContent = "RAINBOW";
buttonDiv.appendChild(rainbowBtn);

restartBtn.addEventListener('click', restartGrid);
greyBtn.addEventListener('click', greyGrid);
rainbowBtn.addEventListener('click', rainbowGrid);

function greyGrid(){
    for (let i = 0; i < sideSize*sideSize; i++){
        newGrid[i].style.backgroundColor = "#fff";
        newGrid[i].style.border = "1px solid #000";
        newGrid[i].addEventListener('mouseenter', colorGreyDiv);
        newGrid[i].removeEventListener('mouseenter', colorDiv);
        newGrid[i].removeEventListener('mouseenter', colorRainbowDiv);
    }
}
function colorGreyDiv(e){
    // let counter = 0;
    // let light = 90;
    // for (let i = 0; i < sideSize*sideSize; i++){
    //     if (e.target == newGrid[i]){
    //         newGrid[i].style.backgroundColor = `hsl(0, 0%, ${light}%)`;
    //         newGrid[i].style.border = "1px solid #000";
    //     }
    //     light = light - 10;
    //     counter++;
    //     if (counter == 9){
    //         counter = 0;
    //         light = 90;
    //     }     
    // }
    let light = 90;
    for (let counter = 0; counter < sideSize*sideSize; counter++){
        
        for (let i = 0; i < counter; i++){
            if (e.target == newGrid[i]){
                newGrid[i].style.backgroundColor = `hsl(0, 0%, ${light}%)`;
                newGrid[i].style.border = "1px solid #000";
                light = light - 10;
            }
        }
    }
 }

function rainbowGrid(){
    for (let i = 0; i < sideSize*sideSize; i++){
        newGrid[i].style.backgroundColor = "#fff";
        newGrid[i].style.border = "1px solid #000";
        newGrid[i].addEventListener('mouseenter', colorRainbowDiv);
        newGrid[i].removeEventListener('mouseenter', colorDiv);
        newGrid[i].removeEventListener('mouseenter', colorGreyDiv);
    }
}

function colorRainbowDiv(e){
    for (let i = 0; i < sideSize*sideSize; i++){
        if (e.target == newGrid[i]){
            let randNum = Math.floor(Math.random()*2**24).toString(16).padStart(6, "0");
            newGrid[i].style.backgroundColor = `#${randNum}`;
            newGrid[i].style.border = "1px solid #000";
        }
    }
 }

function restartGrid(){
    for (let i = 0; i < sideSize*sideSize; i++){
        newGrid[i].style.backgroundColor = "#fff";
        newGrid[i].style.border = "1px solid #000";
        newGrid[i].addEventListener('mouseenter', colorDiv);
        newGrid[i].removeEventListener('mouseenter', colorGreyDiv);
        newGrid[i].removeEventListener('mouseenter', colorRainbowDiv);
    }
}

    // newSideSize = prompt("Insert size of new grid:");
    // parentdiv.style.gridTemplateColumns = `repeat(${newSideSize}, auto)`;
    // parentdiv.style.gridTemplateRows = `repeat(${newSideSize}, auto)`;

    // for (let i = 0; i < newSideSize*newSideSize; i++){
    //     parentdiv.removeChild(newdiv);
    //     let newdiv = document.createElement('div');
    //     newdiv.classList.add('grid-div');
    //     parentdiv.appendChild(newdiv);
    // }