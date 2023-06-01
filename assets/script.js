const grid = document.querySelector("#grid");

// creates grid
const createGrid = (size) => {
  let gridSize = size * size;
  let sqaureSize = 700 / size;

  for (let i = 0; i < gridSize; i++) {
    const sqaure = document.createElement("div");
    sqaure.classList.add("gridSquare");
    sqaure.setAttribute("style", `width: ${sqaureSize}px; height: ${sqaureSize}px`)
    sqaure.addEventListener("mouseover", () => createGridHover(sqaure))
    grid.appendChild(sqaure);
  }
}

// creates grid hover
const createGridHover = (sqaure) => {
  sqaure.classList.add("active");
}

// uses prompt to get new grid size
const getNewSize = () => {
  const sizePrompt = prompt("What size would you like the grid?");
  if (sizePrompt > 100) {
    alert("Please enter a size lower than 100!");
    return;
  }
  grid.replaceChildren();
  createGrid(sizePrompt);
}

// creates size button
const createSizeButton = () => {
  const container = document.querySelector("#container");
  const sizeButton = document.createElement("button");
  sizeButton.textContent = "Size";
  sizeButton.addEventListener("click", getNewSize);
  container.appendChild(sizeButton);
}


//get random color
const getRandomColor = () => {
  const red = document.querySelector(".red");
  const blue = document.querySelector(".blue");
  const colors = [red, blue];
  const randomIndex = Math.floor(Math.random() * colors.length)
  let randomColor = colors[randomIndex];

  return randomColor;
}

createGrid(16); // DEFAULT GRID
createSizeButton();