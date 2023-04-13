document.addEventListener("DOMContentLoaded", ready)


function ready() {
    console.log("FSG")
    document.getElementById("valueRGB").value = ""
}



let nrColor = 6;
let correctAnswers = 0;
let failedAnswers = 0;

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

function buttons_displayColor(nrColor) {
    let array = get_RandomColors(nrColor);
    let color = select_color(array);
    let main = document.getElementById("main")

    let red = document.getElementById("valueRed")
    let green = document.getElementById("valueGreen")
    let blue = document.getElementById("valueBlue")

    red.innerText = color.red
    green.innerText = color.green
    blue.innerText = color.blue

    for (let i = 0; i < nrColor; i++) {
        let button = document.createElement("BUTTON");
        main.appendChild(button)
        main.children[i].setAttribute("data-color", `${array[i].toString()}`);
        main.children[i].addEventListener("click", onColorClick)
        main.children[i].setAttribute("style", `background-color:${array[i].toColor()}`)
    }

    let hidden = document.getElementById("valueRGB")
    hidden.value = color.toString()
}

function onColorClick(event) {

    let hidden = document.getElementById("valueRGB")
    console.log(event.target.getAttribute("data-color"))

    if (failedAnswers < 3) {
        if (event.target.getAttribute("data-color") === hidden.value) {
            correctAnswers += 1
            document.getElementById("numbers_correct").innerText = correctAnswers
        }

        if (event.target.getAttribute("data-color") != hidden.value) {
            failedAnswers += 1
            let lifes = document.querySelector(".lifes")
            lifes.removeChild(lifes.lastElementChild);

        }
        addNewColors()
    }

    if (failedAnswers >= 3) {
        alert("You haven't any life.\n Try again!")
        resetColors()
        failedAnswers = 0;
    }


}

function addNewColors() {
    document.getElementById("valueRGB").value = ""
    empty(main)
    buttons_displayColor(nrColor)

}

function empty(main) {
    main = document.getElementById("main")
    main.innerHTML = "";
}

function easy() {
    clearScor()
    nrColor = 3;
    document.getElementById("valueRGB").value = ""
    empty(main)
    buttons_displayColor(nrColor)

}

function hard() {
    clearScor()
    nrColor = 6;
    document.getElementById("valueRGB").value = ""
    empty(main)
    buttons_displayColor(nrColor)

}

function clearScor() {
    correctAnswers = 0
    let numbersCorrect = document.getElementById("numbers_correct");
    console.log(numbersCorrect)
    numbersCorrect.innerText = correctAnswers;

    let lifes = document.querySelector(".lifes")
    lifes.innerHTML = ""
    for (let i = 0; i < 3; i++) {
        let div = document.createElement("div")
        div.innerHTML = "&#x2764;&#xFE0F;"
        lifes.appendChild(div)
    }

}

function resetColors() {
    clearScor()
    document.getElementById("valueRGB").value = ""
    empty(main)
    buttons_displayColor(nrColor)
}