document.addEventListener("DOMContentLoaded", ready)

let content = [];
let pictures = [];
let items = [];
let pairs = 0;
let lastClicked = undefined

function ready() {
    counterAlert = 0
    let category = {
        activities: activities,
        food: food,
        flags: flags,
        animals: animals
    };
    let items = Object.values(category)[Math.floor(Math.random() * Object.values(category).length)]
    let result = shuffle(items)

    let itemsElements = document.querySelectorAll(".item")
    for (let i = 0; i < items.length; i++) {
        itemsElements[i].textContent = result[i]
    }
    let emoticons = document.querySelectorAll(".emoticons")
    for (let i = 0; i < emoticons.length; i++) {
        emoticons[i].addEventListener("click", click)
    }
    console.log(window.performance.getEntriesByType("navigation")[0].type)
    if (window.performance.getEntriesByType("navigation")[0].type === "navigate") {
        alert("You have 5 minutes to complete the game.\nAfter that the game will restart.\nGood luck!🍀")
    }

}

function shuffle(array) {
    for (let counter = 0; counter < 100; counter++) {
        let i = Math.floor(Math.random() * array.length)
        let j = Math.floor(Math.random() * array.length)
        let aux = array[i]
        array[i] = array[j]
        array[j] = aux
    }
    return array
}
let timeOut = undefined

function click(event) {

    if (lastClicked != event.target.parentNode.children[0]) {

        
        if (!timeOut) {
            timeOut = setTimeout(() => {
                reset_Game(pairs)
                timeOut = undefined
            }, 300000);
        }

        lastClicked = event.target.parentNode.children[0]

        event.target.style = "display: none"
        event.target.parentNode.querySelector(".item").style = "display: block"
        let contentItem = event.target.parentNode.children[1].textContent

        pictures.push(event.target.parentNode.children[0])
        items.push(event.target.parentNode.children[1])
        content.push(contentItem)

        if (content.length === 2 && (content[0] === content[1])) {
            pictures[0].style = "display:none";
            pictures[1].style = "display:none"
            items[0].textContent = ""
            items[0].setAttribute("style", "backgroundColor: white")
            items[0].style.border = " 1px solid white"
            items[1].textContent = ""
            items[1].setAttribute("style", "backgroundColor: white")
            items[1].style.border = "1px solid white"
            content = []
            pictures = []
            items = []
            pairs = pairs + 1;
        }

        if (content.length === 3) {
            pictures[0].style = "display: block"
            items[0].style = "display:none"
            pictures[1].style = "display: block"
            items[1].style = "display: none"
            content = [content[2]]
            pictures = [pictures[2]]
            items = [items[2]]
        }
    }

}

function reset_Game(counter) {
    if (counter === 0) {
        alert(`Oh no!😱\nYou did't find any pairs.\nTry again. You can do it.`)
    } else if (counter > 0) {
        alert(`Congratulations!😎\nYou found ${counter} pairs from 23.`)
    }

    location.reload()
}