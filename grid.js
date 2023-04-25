const container = document.querySelector('#container');
const resoBtn = document.querySelector('#btn');
const resoWidth = 50;
const resoHeight = 50;

resoBtn.addEventListener('click', setResolution);

function setResolution(){
    let setResolution = prompt("resolution");
    if(!isNumeric(setResolution)){
        return console.log(setResolution + " is not a valid number.");
    }
    else{
        if(setResolution <= 1){
            return console.log("Resolution cant be 0 or lower!");
        }

        if(setResolution > 100){
            setResolution = 100;
        }

        refreshGrid(setResolution);
        return console.log("Refresh grid with a resolution of: " + setResolution);
    }
}

function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }

//First generate a row of the chosen width pixel amount. default 16.
//Each element in the top row should have a display of flex(column).
function generateGrid(width = 16, height = 16){
    for (let i = 0; i < width; i++) {
        const column = document.createElement('div');
        column.classList.add('column');
        column.className = "column";

        container.appendChild(column);


        generateBox(column, height);
    }
}

//When the first row is finished create elements per generated column,
//this is again decided by the chosen height pixel amount. default 16.
function generateBox(column, height){
    let containerWidth = document.getElementById('container').clientWidth;

    for (let i = 0; i < height; i++) {
        const box = document.createElement('div');
        box.classList.add('box');

        let size = containerWidth / height;
        console.log(size + " container width" + containerWidth);
        box.style.width = size + "px";
        box.style.height = size + "px";
        box.className = "box";

        column.appendChild(box);

        //Adding hover event to the box
        box.addEventListener('mouseover', function(e) {
            setRandomColor(e.target);
        });
    }
}

function setRandomColor(target){
    let randomCol = generateRandomColor();

    target.style.background = randomCol;
}

function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}

function refreshGrid(resolution){
    //Deleting current elements from container.
    container.innerHTML = '';

    //Generating new grid
    generateGrid(resolution, resolution);
}

generateGrid(50, 50);