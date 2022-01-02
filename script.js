const parentdiv = document.getElementById('parent-div');

for (let i = 0; i < 16; i++){
    let newdiv = document.createElement('div');
    newdiv.classList.add('grid-div');
    parentdiv.appendChild(newdiv);
}


let newGrid = document.getElementsByClassName('grid-div');
for (let i = 0; i <16; i++){
    newGrid[i].addEventListener('mouseenter', colorDiv);
}


function colorDiv(e){
   for (let i = 0; i <16; i++){
       if (e.target == newGrid[i]){
           let randNum = Math.floor(Math.random()*2**24).toString(16).padStart(6, "0");
           newGrid[i].style.backgroundColor = `#${randNum}`;
       }
   }
}