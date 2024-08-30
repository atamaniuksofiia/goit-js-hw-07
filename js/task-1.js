const categoriesList = document.querySelector(`#categories`)
// console.log(categoriesList)
const itemsList = categoriesList.querySelectorAll(`.item`)
console.log(`Number of categories:${itemsList.length}`)

itemsList.forEach(item => {
    const categoryTitle = item.querySelector(`h2`).textContent;
    const elementsList = item.querySelectorAll(`ul > li`);
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${elementsList.length}`)
    })