const gridDiv = document.getElementById('grid-div');
const inputDiv = document.getElementById('user-input-div');
const btnDiv = document.getElementById('buttons-div');
const inputEl = document.querySelector('input[type=range]');

const sizeDisplay = document.createElement('span');
inputDiv.appendChild(sizeDisplay);

inputEl.addEventListener('input', sizeGrid);



const colorBtn = document.getElementById('color-picker');
const colorInput = document.querySelector('input[type=color]');

const greyBtn = document.getElementById('grey-btn');
const rainbowBtn = document.getElementById('rainbow-btn');
const resetBtn = document.getElementById('reset-btn');



const defSize = 10;
let defColor = '#000000';
const defActive = colorBtn;

colorInput.addEventListener('input', changeColor);



function reset(){
    gridDiv.innerHTML = '';
}

function initialize(size){
    sizeDisplay.textContent = `(${size} x ${size})`;
    gridDiv.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridDiv.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    defActive.classList.add('active');

    for (let i = 0; i < size*size; i++){
        const newdiv = document.createElement('div');
        newdiv.addEventListener('mouseenter', colorDiv);
        gridDiv.appendChild(newdiv);
    }
}

function sizeGrid(){
    reset();
    const newSize = inputEl.value;
    initialize(newSize);
}

function changeColor(){
    defColor = colorInput.value;
}

function colorDiv(e){
    e.target.style.backgroundColor = defColor;
}


window.onload = () => {
    colorInput.value = '#000';
    inputEl.value = 10;
}

initialize(defSize);









/*


const gridDiv = document.getElementsByClassName('grid-div');
for (let i = 0; i < sideSize*sideSize; i++){
    gridDiv[i].addEventListener('mouseenter', colorDiv);
}

function colorDiv(e){
   for (let i = 0; i < sideSize*sideSize; i++){
       if (e.target == gridDiv[i]){
           if (gridDiv[i].style.backgroundColor == ''){
                gridDiv[i].style.backgroundColor = '#000';
                gridDiv[i].style.border = "1px solid #fff";
                gridDiv[i].addEventListener('mouseenter', colorDiv);
                gridDiv[i].removeEventListener('mouseenter', colorGreyDiv);
                gridDiv[i].removeEventListener('mouseenter', colorRainbowDiv);
           }
           else if (gridDiv[i].style.backgroundColor == '#000'){
                gridDiv[i].style.backgroundColor = '#fff';
                gridDiv[i].style.border = "1px solid #000";
                gridDiv[i].addEventListener('mouseenter', colorDiv);
                gridDiv[i].removeEventListener('mouseenter', colorGreyDiv);
                gridDiv[i].removeEventListener('mouseenter', colorRainbowDiv);
           }
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
        gridDiv[i].style.backgroundColor = "#fff";
        gridDiv[i].style.border = "1px solid #000";
        gridDiv[i].addEventListener('mouseenter', colorGreyDiv);
        gridDiv[i].removeEventListener('mouseenter', colorDiv);
        gridDiv[i].removeEventListener('mouseenter', colorRainbowDiv);
    }
}
function colorGreyDiv(e){
    // let counter = 0;
    // let light = 90;
    // for (let i = 0; i < sideSize*sideSize; i++){
    //     if (e.target == gridDiv[i]){
    //         gridDiv[i].style.backgroundColor = `hsl(0, 0%, ${light}%)`;
    //         gridDiv[i].style.border = "1px solid #000";
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
            if (e.target == gridDiv[i]){
                gridDiv[i].style.backgroundColor = `hsl(0, 0%, ${light}%)`;
                gridDiv[i].style.border = "1px solid #000";
                light = light - 10;
                if (counter == 10){
                    counter = 0;
                }
            }
        }
    }
 }

function rainbowGrid(){
    for (let i = 0; i < sideSize*sideSize; i++){
        gridDiv[i].style.backgroundColor = "#fff";
        gridDiv[i].style.border = "1px solid #000";
        gridDiv[i].addEventListener('mouseenter', colorRainbowDiv);
        gridDiv[i].removeEventListener('mouseenter', colorDiv);
        gridDiv[i].removeEventListener('mouseenter', colorGreyDiv);
    }
}

function colorRainbowDiv(e){
    for (let i = 0; i < sideSize*sideSize; i++){
        if (e.target == gridDiv[i]){
            let randNum = Math.floor(Math.random()*2**24).toString(16).padStart(6, "0");
            gridDiv[i].style.backgroundColor = `#${randNum}`;
            gridDiv[i].style.border = "1px solid #000";
        }
    }
 }

function restartGrid(){
    for (let i = 0; i < sideSize*sideSize; i++){
        gridDiv[i].style.backgroundColor = "#fff";
        gridDiv[i].style.border = "1px solid #000";
        gridDiv[i].addEventListener('mouseenter', colorDiv);
        gridDiv[i].removeEventListener('mouseenter', colorGreyDiv);
        gridDiv[i].removeEventListener('mouseenter', colorRainbowDiv);
    }
}
*/

    // newSideSize = prompt("Insert size of new grid:");
    // gridDiv.style.gridTemplateColumns = `repeat(${newSideSize}, auto)`;
    // gridDiv.style.gridTemplateRows = `repeat(${newSideSize}, auto)`;

    // for (let i = 0; i < newSideSize*newSideSize; i++){
    //     gridDiv.removeChild(newdiv);
    //     let newdiv = document.createElement('div');
    //     newdiv.classList.add('grid-div');
    //     gridDiv.appendChild(newdiv);
    // }