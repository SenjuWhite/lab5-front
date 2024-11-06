const table = document.getElementById("table");
let counter = 1;
const variantNumber = 21; 

for (let i = 0; i < 6; i++) {
  const row = document.createElement("tr");
  for (let j = 0; j < 6; j++) {
    const cell = document.createElement("td");
    cell.textContent = counter;
    cell.dataset.number = counter; 
    row.appendChild(cell);
    counter++;
  }
  table.appendChild(row);
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

table.addEventListener("mouseover", (event) => {
  const cell = event.target;
  if (cell.tagName === "TD" && parseInt(cell.dataset.number) === variantNumber) {
    cell.style.backgroundColor = getRandomColor();
  }
});

table.addEventListener("click", (event) => {
  const cell = event.target;
  if (cell.tagName === "TD" && parseInt(cell.dataset.number) === variantNumber) {
    const selectedColor = document.getElementById("colorPicker").value;
    cell.style.backgroundColor = selectedColor;
  }
});

table.addEventListener("dblclick", (event) => {
  const cell = event.target;
  if (cell.tagName === "TD" && parseInt(cell.dataset.number) === variantNumber) {
    const row = cell.parentElement;
    const selectedColor = document.getElementById("colorPicker").value;
    for (let i = 0; i < row.children.length; i++) {
      row.children[i].style.backgroundColor = selectedColor;
    }
  }
});