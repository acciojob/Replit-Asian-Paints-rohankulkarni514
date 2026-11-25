//your JS code here. If required.
const changeButton = document.getElementById("change_button");
const resetButton = document.getElementById("Reset");
const blockInput = document.getElementById("block_id");
const colourInput = document.getElementById("colour_id");
const gridItems = document.querySelectorAll(".grid-item");

function resetAllGridColors() {
  gridItems.forEach((item) => {
    item.style.backgroundColor = "transparent";
  });
}

changeButton.addEventListener("click", () => {
  const blockId = blockInput.value.trim();
  const color = colourInput.value.trim();

  // First reset every grid cell's background color to transparent
  resetAllGridColors();

  if (!blockId || !color) {
    return;
  }

  const targetCell = document.getElementById(blockId);
  if (targetCell && targetCell.classList.contains("grid-item")) {
    targetCell.style.backgroundColor = color;
  }
});

resetButton.addEventListener("click", () => {
  resetAllGridColors();
  blockInput.value = "";
  colourInput.value = "";
});