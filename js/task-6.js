function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  const div = document.querySelector("#controls")
  const input= document.querySelector('input[type="number"]')
  const createBtn = document.querySelector('button[data-create]')
  const destroyBtn = document.querySelector('button[data-destroy]')
  const boxesContainer = document.getElementById('boxes');

  function createBoxes(amount){
    boxesContainer.innerHTML = ''

    let size = 30;
    for(let i = 0; i < amount; i++){
      const box = document.createElement('div')
      box.classList.add('box');
      box.style.width = `${size}px`
      box.style.height = `${size}px`
      box.style.backgroundColor = getRandomHexColor()

      boxesContainer.appendChild(box)
      size += 10
    }
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
}
createBtn.addEventListener('click', () => {
  const amount = parseInt(input.value, 10);
  if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = '';
  } else {
      alert('Please enter a number between 1 and 100.');
  }
});
destroyBtn.addEventListener('click', destroyBoxes);