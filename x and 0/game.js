document.addEventListener("DOMContentLoaded", ready)
let array = [];
let items = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
let winner = false;

function ready() {
    let position = document.querySelectorAll(".position")
    for (let i = 0; i < position.length; i++) {
        position[i].addEventListener("mousedown", mousedown)
        position[i].addEventListener("mouseup", mouseup)
    }

}

function mousedown(event) {
    let position = event.target
    let item = position.children[0]
    if (item.textContent === "") {
        display_character(item)
    }
}

function mouseup(event) {
    let positionUp = event.target
    let id = positionUp.id;
    let valueUp = positionUp.children[0].innerText
    for (let i = 0; i < items.length; i++) {
        if (items[i] === id) {
            items[i] = valueUp;

        }
    }

    let divs = document.querySelectorAll(".item")
    if (items[0] === items[1] && items[0] === items[2]) {
        winner = true;
        alert(`Congratulations!\n ${items[2]} won 😋`)
        reset_game(divs)
    }
    if (items[3] === items[4] && items[3] === items[5]) {
        winner = true
        alert(`Congratulations!\n ${items[5]} won 😋`)
        reset_game(divs)
    }
    if (items[6] === items[7] && items[6] === items[8]) {
        winner = true
        alert(`Congratulations!\n ${items[8]} won 😋 `)
        reset_game(divs)
    }
    if (items[0] === items[3] && items[0] === items[6]) {
        winner = true
        alert(`Congratulations!\n ${items[6]} won 😋 `)
        reset_game(divs)
    }
    if (items[1] === items[4] && items[1] === items[7]) {
        winner = true
        alert(`Congratulations!\n ${items[7]} won 😋`)
        reset_game(divs)
    }
    if (items[2] === items[5] && items[2] === items[8]) {
        winner = true
        alert(`Congratulations!\n ${items[8]} won 😋`)
        reset_game(divs)
    }
    if (items[0] === items[4] && items[0] === items[8]) {
        winner = true
        alert(`Congratulations!\n ${items[8]} won 😋`)
        reset_game(divs)
    }
    if (items[2] === items[4] && items[2] === items[6]) {
        winner = true
        alert(`Congratulations!\n ${items[6]} won 😋`)
        reset_game(divs)
    }

    let index = exist_index(items)
    console.log(items, winner)
    if (index === false && winner === false) {
        alert(`Unfortunately there is no winner 😥\n Try again!`)
        reset_game(divs)
    }
    if (index === false && winner === true) {
        reset_game(divs)
    }


}

function display_character(item) {
    if (array.length % 2 === 0) {
        array.push("X")
        item.innerText = "X"

    } else if (array.length % 2 === 1) {
        array.push("O")
        item.innerText = "O"
    }
}

function reset_game(divs) {
    for (let i = 0; i < divs.length; i++) {
        divs[i].innerText = ""
    }

    array = []
    items = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
}

function exist_index(items) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] >= "0" && items[i] <= "8") {
            return true
        }
    }
    return false
}
