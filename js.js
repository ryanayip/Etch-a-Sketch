const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    cell.addEventListener("mouseover", changeColor);
    container.appendChild(cell).className = "gridItem";
  };
};

makeRows(16, 16);



const gridItem = document.querySelector('.gridItem');
const gridItems = document.querySelectorAll(".gridItem")

function changeColor() {
    this.style.backgroundColor = "black";
}




