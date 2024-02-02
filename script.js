const mainContent = document.querySelector(".main-content");
const SIZE_OF_GRID = 16;
let gridContainer = document.createElement("div");
gridContainer.className = "grid-container";

for (let rowNum = 0; rowNum < SIZE_OF_GRID; rowNum++) {
  let gridRow = document.createElement("div");
  gridRow.className = `grid-row`;
  for (let colNum = 0; colNum < SIZE_OF_GRID; colNum++) {
    let gridSquare = document.createElement("div");
    gridSquare.textContent = `.`;
    gridSquare.className = `grid-square`;
    gridSquare.id = `grid-${colNum + 16 * rowNum}`;
    gridRow.appendChild(gridSquare);
  }
  gridContainer.appendChild(gridRow);
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
mainContent.appendChild(gridContainer);
