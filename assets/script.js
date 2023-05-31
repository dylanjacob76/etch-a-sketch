// loop through div 256(16*16) times *DONE*
// create a new element every time it loops *DONE*
// append that element to the grid *DONE*
// set a width to the grid itself *DONE*
// use flexbox wrap to style and make the grid not just one line *DONE*




function createGrid() {
  const grid = document.querySelector("#grid");

  for (let i = 0; i < 256; i++) {
    let divEl = document.createElement("div");
    divEl.classList.add("gridSqaure");
    grid.appendChild(divEl);
  }
}

createGrid();