"use strict";
const attachPoint = document.querySelector(".attach-point");
const gridSizeInput = document.querySelector("#grid-size");
const colorChoice = document.querySelector("#color-picker");
const randomizeCheckbox = document.querySelector("#randomize-color");
const opacityCheckbox = document.querySelector("#increasing-opacity");
let randomizeBool = false;
let opacityBool = false;
let SIZE_OF_GRID = 16;
let gridContainer = document.createElement("div");
gridContainer.className = "grid-container";
//Draw initial
drawGrid(SIZE_OF_GRID, gridContainer);

gridSizeInput.addEventListener("input", () => {
  SIZE_OF_GRID = gridSizeInput.value;
  if (SIZE_OF_GRID > 64 || SIZE_OF_GRID < 16) {
    SIZE_OF_GRID = 16;
  }
  if (attachPoint.contains(gridContainer)) {
    attachPoint.removeChild(gridContainer);
  }
  gridContainer = document.createElement("div");
  gridContainer.className = "grid-container";
  drawGrid(SIZE_OF_GRID, gridContainer);
});

[randomizeCheckbox, opacityCheckbox].forEach((element) => {
  element.addEventListener("input", (e) => {
    switch (element.name) {
      case "randomizeColor":
        if (e.target.checked) {
          randomizeBool = true;
        } else {
          randomizeBool = false;
        }
        break;

      case "increasingOpacity":
        if (e.target.checked) {
          opacityBool = true;
        } else {
          opacityBool = false;
        }
        break;
    }
  });
});

function colorIn() {
  if (randomizeBool) {
    let rr = Math.floor(Math.max(0.1, Math.random()) * 100);
    let gg = Math.floor(Math.max(0.1, Math.random()) * 100);
    let bb = Math.floor(Math.max(0.1, Math.random()) * 100);
    colorChoice.value = `#${rr}${gg}${bb}`;
  }

  if (opacityBool) {
    if (!this.style.opacity) {
      this.style.opacity = 0;
    }
    this.style.opacity = parseFloat(this.style.opacity) + 0.1;
    console.log(this.style.opacity);
  }
  this.style.backgroundColor = `${colorChoice.value}`;
}

function drawGrid(gridsize, container) {
  for (let rowNum = 0; rowNum < gridsize; rowNum++) {
    let gridRow = document.createElement("div");
    gridRow.className = `grid-row`;
    for (let colNum = 0; colNum < gridsize; colNum++) {
      let gridSquare = document.createElement("div");
      container.addEventListener("mousedown", () => {
        gridSquare.addEventListener("mouseenter", colorIn);
      });
      container.addEventListener("mouseup", () => {
        gridSquare.removeEventListener("mouseenter", colorIn);
      });
      gridSquare.className = `grid-square`;
      gridSquare.id = `grid-${colNum + 16 * rowNum}`;
      gridSquare.style.cssText = `
      height: min((${80 / gridsize}vh),(${80 / gridsize}vw)); min-height: ${
        300 / gridsize
      }px`;
      gridRow.appendChild(gridSquare);
    }
    container.appendChild(gridRow);
  }
  attachPoint.appendChild(container);
}
