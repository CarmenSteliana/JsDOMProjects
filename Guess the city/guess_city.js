document.addEventListener("DOMContentLoaded", new_game)
let category = ""
let item = "";
let lifes = 10;

function new_game() {
    document.addEventListener("keypress", keypress)
    let main = document.querySelector(".main")
    main.addEventListener("keypress", keypress)
    lifes = 10
    document.querySelector(".nr_lifes").innerText = lifes
    let categoryText = document.querySelector(".random_category")
    category = random_category()
    categoryText.innerText = category
    addClickListeners()

    if (category === "movies") {
        item = get_random_item(movies)
        console.log(item)
        guess(item)

    }

    if (category === "cities") {
        item = get_random_item(cities)
        console.log(item)
        guess(item)

    }

    if (category === "cars") {
        item = get_random_item(cars)
        console.log(item)
        guess(item)
    }

}

function random_category() {
    let array = ["movies", "cars", "cities"]
    let random = array[Math.floor(Math.random() * array.length)]
    return random
}

function get_random_item(array) {
    let random = array[Math.floor(Math.random() * array.length)]
    return random
}

function guess(word) {
    let guess = document.querySelector(".guess");
    guess.innerHTML = ""
    for (let i = 0; i < word.length; i++) {
        if (word[i] === " ") {
            let div = document.createElement("div")
            div.innerHTML = "&nbsp"
            guess.appendChild(div)
        }
        if ((word[i] >= "a" && word[i] <= "z") ||
            (word[i] >= "A" && word[i] <= "Z")) {
            let div = document.createElement("div")
            div.innerHTML = "_"
            guess.appendChild(div)
        }
    }
}


function addClickListeners() {
    let buttons = document.getElementById("buttons").children
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", onclick)
        buttons[i].setAttribute("style", "background-color:white")
        buttons[i].setAttribute("disabled", false)
        buttons[i].removeAttribute("disabled")
    }
}

function keypress(event) {
    const letter = event.key

    const button = document.querySelector(`button[data-value=${letter.toUpperCase()}]`)

    if (!button.disabled) {
        const e = { target: button }
        onclick(e)
    }
}

function onclick(event) {
    const letter = event.target.getAttribute("data-value")
    let guessWord = document.querySelector(".guess").children
    let nrLifes = document.querySelector(".nr_lifes")
    let word = item.toUpperCase()
    let array = word.split("")
    let correct = false
    for (let i = 0; i < word.length; i++) {
        if (letter === array[i]) {
            guessWord[i].innerText = letter
            correct = true
            event.target.style = "background-color:rgb(147, 235, 59)"
            event.target.disabled = "true"

        }
    }

    if (correct) {
        let finished = true

        for (let i = 0; i < word.length; i++) {
            if ("_" === guessWord[i].innerText) {
                finished = false
            }
        }

        if (finished) {
            alert("Conglatulations 😍 \n You guessed the word.")
            new_game()
        }
    }

    if (!correct) {
        lifes = lifes - 1
        nrLifes.innerText = lifes
        event.target.style = "background-color:rgb(255, 51, 0)"
        event.target.disabled = "true"



        if (lifes <= 0) {
            alert(`What a pity!\n You lost😓 \n The word was ${item}.`)

            new_game()
        }
    }
}

