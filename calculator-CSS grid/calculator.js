let number1 = 0
let number2 = 0
let op = null
let eq = null

function ready() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", buttonPressed);
    }
}

document.addEventListener("DOMContentLoaded", ready)


function buttonPressed(Event) {
    let key = Event.target.id

    const operations = "+-*/"
    const digits = "0123456789"
    const equal = "="

    if (operations.includes(key)) {
        operationPressed(key)
    }

    if (digits.includes(key)) {
        digitPressed(key)
    }

    if (equal.includes(key)) {
        equalPressed(key)
    }

    if (key == "C") {
        clear()
    }
}

function clear() {
    eq = null
    op = null
    number1 = 0
    number2 = 0

    display()
}

function operationPressed(key) {
    op = key

    display()
}

function digitPressed(key) {
    if (op) {
        number2 = number2 * 10 + Number(key)
    } else {
        number1 = number1 * 10 + Number(key)
    }

    display()
}

function equalPressed(key) {
    eq = key

    display()
}

function display() {
    let result = []

    if (eq) {
        number1 = computeResult()
        number2 = 0
        op = null
        eq = null
        document.querySelector(".op").innerText = op
    }

    if (op) {
        document.querySelector(".op").innerText = op
        result.push(number2)
    } else {
        result.push(number1)
    }

    // result.push(number1)

    // if (op) {
    //     result.push(op)
    //     result.push(number2)
    // }

    // if (eq) {
    //     result.push("=")
    //     result.push(computeResult())
    // }

    let message = result.join(" ")

    document.querySelector(".display").innerText = message
}

function computeResult() {
    if (op === "+") {
        return number1 + number2
    }

    if (op === "-") {
        return number1 - number2
    }

    if (op === "*") {
        return number1 * number2
    }

    if (op === "/") {
        return number1 / number2
    }

    return 0
}

