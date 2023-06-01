const createGrid = (size) => {
  const container = document.querySelector("#container");
  let gridSize = size * size;
  let sqaureSize = 500/size;
  for (let i = 0; i < gridSize; i++) {
    const sqaure = document.createElement("div");
    sqaure.classList.add("gridSquare");
    sqaure.setAttribute("style", `width: ${sqaureSize}px; height: ${sqaureSize}px`)
    sqaure.addEventListener("mouseover", () => createGridHover(sqaure))
    container.appendChild(sqaure);
  }
}

const createGridHover = (sqaure) => {
  sqaure.classList.add("active");
}

createGrid(16);


// create a button that takes in the createGrid function as a callback and makes the size parameter equal to the prompt