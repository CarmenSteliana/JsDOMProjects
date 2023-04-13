let correctAnswers = 0
let failedAnswers = 0
let colorsCount = 6


function ready() {
    document.getElementById("valueRGB").value = ""
}

document.addEventListener("DOMContentLoaded", ready)

function get_RGBcolor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return {
        red: r,
        green: g,
        blue: b,
        toColor: function () {
            return `rgb(${this.red}, ${this.green}, ${this.blue})`
        },
        toString: function () {
            let array = [this.red, this.green, this.blue]
            return array.join(", ")
        },

    }
}


function get_RandomColors(nr) {
    let array = []
    for (let i = 0; i < nr; i++) {
        array.push(get_RGBcolor())
    }
    return array
}


function select_color(array) {
    let color = array[Math.floor(Math.random() * array.length)]
    return color
}

function addNewColors() {
    let array = get_RandomColors(colorsCount);
    let color = select_color(array);
    let red = document.getElementById("valueRed")
    let green = document.getElementById("valueGreen")
    let blue = document.getElementById("valueBlue")

    red.innerText = color.red
    green.innerText = color.green
    blue.innerText = color.blue

    let buttons = document.querySelectorAll(".button")
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].setAttribute("data-color", `${array[i].toString()}`);
        buttons[i].style.backgroundColor = `${array[i].toColor()}`;
    }
    let hidden = document.getElementById("valueRGB")
    hidden.value = color.toString()
}

function onColorClick(event) {
    let numbersCorrect = document.getElementById("numbers_correct");
    let numbersIncorrect = document.getElementById("numbers_incorrect")

    let hidden = document.getElementById("valueRGB")
    console.log(event.target.getAttribute("data-color"))
    if (event.target.getAttribute("data-color") === hidden.value) {
        correctAnswers += 1
        numbersCorrect.innerText = correctAnswers
    }

    if (event.target.getAttribute("data-color") != hidden.value) {
        failedAnswers += 1
        numbersIncorrect.innerText = failedAnswers

    }

    addNewColors()
}


function easy(){
   colorsCount = 3;
   addNewColors()
   let main = document.getElementsByClassName("main")
   console.log(main)

}


