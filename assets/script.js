// loop through div 256(16*16) times *DONE*
// create a new element every time it loops *DONE*
// append that element to the grid *DONE*
// set a width to the grid itself *DONE*
// use flexbox wrap to style and make the grid not just one line *DONE*

// add hover effect to the gridSqaure class that changes the background color
// aquamarine




const createGrid = () => {
  const grid = document.querySelector("#grid");

  for (let i = 0; i < 256; i++) {
    let sqaure = document.createElement("div");
    sqaure.classList.add("gridSqaure");
    sqaure.addEventListener("mouseover", function() {
      addHover(sqaure);
    });
    grid.appendChild(sqaure);

  }
}

const addHover = (square) => {
  square.classList.add("active");
}

createGrid();