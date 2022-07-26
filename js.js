const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    //cell.style.backgroundColor = "white";
    cell.addEventListener("mouseover", changeColor);
    cell.addEventListener("touchstart", changeColor);
    cell.addEventListener("touchmove", changeColor);

    cell.style.backgroundColor = "white"
    container.appendChild(cell).className = "gridItem";
    
    
  };
  
};

makeRows(100, 100);



const gridItem = document.querySelector('.gridItem');
const gridItems = document.querySelectorAll(".gridItem")

function changeColor() {
    this.style.backgroundColor = "black";
}

function changeSize() {    
    
    let x = prompt("How many squares wide? Choose between 1-100.");

    if (isNaN(x)) {
        alert("That's not a number...");
        return;
    }

    if (x > 100 || x < 1) {
        alert("You'll crash your device with that many squares! How about between 1 and 100?")
    } else {
    makeRows(x, x);
    gridItems.forEach((gridItem) => (gridItem.style.backgroundColor = "white"));

    
    
    
    }}

const onClickBtn = document.querySelector("#addSquares");
onClickBtn.onclick = changeSize

const resetBtn = document.querySelector("#resetBoard")
resetBtn.onclick = reset

function reset() {
    gridItems.forEach((gridItem) => (gridItem.style.backgroundColor = "white"));
    makeRows(100, 100);
    gridItems.forEach((gridItem) => (gridItem.style.backgroundColor = "white"));
  }