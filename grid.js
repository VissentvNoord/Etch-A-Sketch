const container = document.querySelector('#container');

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
            e.target.style.background = 'white';
        });
    }
}

generateGrid(50, 50);