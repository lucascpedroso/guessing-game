let screen1 = document.querySelector(".screen1")
let screen2 = document.querySelector(".screen2")
const btnPlay = document.querySelector("#btnPlay")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let attempts = 1
const inputNumber = document.querySelector("#inputNumber")

// events
btnPlay.addEventListener("click", handlePlayClick)
btnReset.addEventListener("click", handleResetClick)
// add a tecla enter no screen dois mas nao adicionando no screen1 pois era chamar a funcao RESET
document.addEventListener("keydown", function(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
})

// callback function
function handlePlayClick(event) {
    event.preventDefault()
   
    if(Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10 || !inputNumber.value) {
        alert('here')
    } else if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        document.querySelector(".screen2 h2").innerText = `You got it right in ${attempts} attempts!`}
   
        // Limpa o input apos apertar o play, se o numero nao for o correto
    inputNumber.value = ""
    attempts++
}

function handleResetClick() {
    toggleScreen()
    randomNumber = Math.round(Math.random() * 10)
    attempts = 1
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}