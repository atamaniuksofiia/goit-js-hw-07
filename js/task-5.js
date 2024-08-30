const body = document.querySelector("body")
const button = document.querySelector(".change-color")
const color = document.querySelector(".color")

button.addEventListener("click", () => {
  const newColor = getRandomHexColor()
  body.style.backgroundColor = newColor;
  color.textContent = newColor
})

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }