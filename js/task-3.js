const inputLine = document.querySelector(`#name-input`)
const outputLine = document.querySelector(`#name-output`)

function updateGreeting(){
    const updateValue = inputLine.value.trim()

    if (updateValue === ``){
        outputLine.textContent = `Anonymous`
    }else{
        outputLine.textContent = updateValue
    }
}

inputLine.addEventListener("input", updateGreeting)
