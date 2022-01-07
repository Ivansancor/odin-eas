const gridDiv = document.getElementById('grid-div');
const inputDiv = document.getElementById('user-input-div');
const btnDiv = document.getElementById('buttons-div');
const inputEl = document.querySelector('input[type=range]');

const sizeDisplay = document.createElement('span');
inputDiv.appendChild(sizeDisplay);

inputEl.addEventListener('input', sizeGrid);



const colorBtn = document.getElementById('color-btn');
const colorInput = document.querySelector('input[type=color]');

const greyBtn = document.getElementById('grey-btn');
const rainbowBtn = document.getElementById('rainbow-btn');
const resetBtn = document.getElementById('reset-btn');


const defSize = 10;
let defColor = '#000000';
let defActive = colorBtn;

colorInput.addEventListener('input', changeColor);

colorBtn.addEventListener('click', colorMode);
greyBtn.addEventListener('click', greyColorMode);
rainbowBtn.addEventListener('click', rainbowColorMode);
resetBtn.addEventListener('click', resetDiv);


function reset(){
    gridDiv.innerHTML = '';
}

function initialize(size, mode, active){
    sizeDisplay.textContent = `(${size} x ${size})`;
    gridDiv.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridDiv.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    active.classList.add('active');

    for (let i = 0; i < size*size; i++){
        const newdiv = document.createElement('div');
        newdiv.addEventListener('mouseenter', mode);
        gridDiv.appendChild(newdiv);
    }
}

function sizeGrid(){
    reset();
    const newSize = inputEl.value;
    if (defActive == colorBtn){
        initialize(newSize, colorDiv, colorBtn);
    }
    else if (defActive == rainbowBtn){
        initialize(newSize, rainbowColorMode, rainbowBtn);
    }
    else if (defActive == greyBtn){
        initialize(newSize, greyColorMode, greyBtn);
    }
}

function changeColor(){
    defColor = colorInput.value;
}

function colorDiv(e){   
    e.target.style.backgroundColor = defColor;
}

function colorMode(){
    reset();
    colorInput.value = '#000000';
    defActive = colorBtn;
    rainbowBtn.classList.remove('active');
    greyBtn.classList.remove('active');
    
    defColor = '#000000';
    const newSize = inputEl.value;
    initialize(newSize, colorDiv, colorBtn);
}

function greyColorDiv(e){
    let opacity = Number(e.target.style.backgroundColor.slice(-4, -1));
    if (opacity <= 0.9){
    defColor = `rgba(0, 0, 0, ${opacity + 0.1})`;
    e.target.style.backgroundColor = defColor;
    }
}     

function greyColorMode(){
    reset();
    defActive = greyBtn;
    colorBtn.classList.remove('active');
    rainbowBtn.classList.remove('active');

    const newSize = inputEl.value;
    initialize(newSize, greyColorDiv, greyBtn);
}

function rainbowColorDiv(e){
    let randNum = Math.floor(Math.random()*2**24).toString(16).padStart(6, "0");
    defColor = `#${randNum}`;
    e.target.style.backgroundColor = defColor;
}

function rainbowColorMode(){
    reset();
    defActive = rainbowBtn;
    colorBtn.classList.remove('active');
    greyBtn.classList.remove('active');

    const newSize = inputEl.value;
    initialize(newSize, rainbowColorDiv, rainbowBtn);
}

function resetDiv(){
    location.reload();
}





window.onload = () => {
    colorInput.value = '#000000';
    inputEl.value = 10;
}

initialize(defSize, colorDiv, colorBtn);