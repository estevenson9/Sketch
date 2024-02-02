const mainContent = document.querySelector(".main-content");
const gridSizeInput = document.querySelector("#grid-size");
let SIZE_OF_GRID = 16;
let gridContainer = document.createElement("div");
gridSizeInput.addEventListener("input", () => {
  SIZE_OF_GRID = gridSizeInput.value;
  if (SIZE_OF_GRID > 128 || SIZE_OF_GRID < 16) {
    SIZE_OF_GRID = 16;
  }
  if (mainContent.contains(gridContainer)) {
    mainContent.removeChild(gridContainer);
  }
  gridContainer = document.createElement("div");
  gridContainer.className = "grid-container";
  drawGrid(SIZE_OF_GRID, gridContainer);
});

function colorIn() {
  this.style.backgroundColor = "blue";
}

function eraseOut() {
  this.style.backgroundColor = "";
}
function drawGrid(gridsize, container) {
  for (let rowNum = 0; rowNum < gridsize; rowNum++) {
    let gridRow = document.createElement("div");
    gridRow.className = `grid-row`;
    for (let colNum = 0; colNum < gridsize; colNum++) {
      let gridSquare = document.createElement("div");
      container.addEventListener("mousedown", () => {
        gridSquare.addEventListener("mousemove", colorIn);
      });
      container.addEventListener("mouseup", () => {
        gridSquare.removeEventListener("mousemove", colorIn);
      });
      gridSquare.textContent = `.`;
      gridSquare.className = `grid-square`;
      gridSquare.id = `grid-${colNum + 16 * rowNum}`;
      gridSquare.style.cssText = `width: ${800 / gridsize}px;
      height: ${800 / gridsize}px; user-select: none`;
      gridRow.appendChild(gridSquare);
    }
    container.appendChild(gridRow);
  }
  mainContent.appendChild(container);
}

// let testRow = document.createElement("div");
// for (let index = 1; index < SIZE_OF_GRID ** 2 + 1; index++) {
//   let testSquare = document.createElement("div");
//   testSquare.textContent = `${index}`;
//   testSquare.className = `grid-square`;
//   testSquare.id = `grid-${index}`;
//   testRow.appendChild(testSquare);
//   if (index % SIZE_OF_GRID === 0) {
//     gridContainer.appendChild(testRow);
//     testRow = document.createElement("div");
//   }
// }
