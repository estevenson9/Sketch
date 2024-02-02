const mainContent = document.querySelector(".main-content");
const NUM_OF_GRIDS = 16;
let gridContainer = document.createElement("div");
gridContainer.className = "grid-container";

for (let index = 0; index < NUM_OF_GRIDS; index++) {
  let gridSquare = document.createElement("div");
  gridSquare.textContent = index.toString();
  gridSquare.className = `grid-square`;
  gridSquare.id = `grid-${index}`;
  gridContainer.appendChild(gridSquare);
}
mainContent.appendChild(gridContainer);
