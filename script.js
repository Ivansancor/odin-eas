const parentdiv = document.getElementById('parent-div');

for (let i = 0; i < 16; i++){
    let newdiv = document.createElement('div');
    newdiv.classList.add('grid-div');
    parentdiv.appendChild(newdiv);        
}