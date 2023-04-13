let list = [];

function onLoad() {
    let input = document.getElementById("text")
    input.addEventListener('keypress', function(event) {
        if (event.key === "Enter") {
            addItem()
        }

    });

}

window.onload = onLoad


function addItem() {
    let nume = document.getElementById("text").value
    if (nume != "") {
        list.push({
            nume: nume,
            marked: false
        })

    }

    createTable()

    document.getElementById("text").value = "";
}


function createTable() {
    let html = `<table>
    <tr>
      <th>Item description</th>
      <th class="action">Action</th>
    </tr>`

    for (let i = 0; i < list.length; i++) {
        let item = list[i].nume;
        let markedclass = "";
        if (list[i].marked === true) {
            markedclass = "through"
        }


        html = html + `<tr>
  <td class ="${markedclass}">${item}</td>
  <td><button class="color"onclick="marked(${i})">Mark as buyed</button></td>
  </tr>`
    }

    html = html + `</table>`;
    console.log(html)

    if (list.length != 0) {
        document.querySelector("#table").innerHTML = html;
    } else {
        document.querySelector("#table").innerHTML = "";
    }


}




function sortAsc() {
    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (list[i].nume > list[j].nume) {
                let aux = list[i];
                list[i] = list[j];
                list[j] = aux;
            }
        }
    }

    createTable()


}

function sortDesc() {
    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (list[i].nume < list[j].nume) {
                let aux = list[i];
                list[i] = list[j];
                list[j] = aux;
            }
        }
    }

    createTable()
}

function marked(index) {
    list[index].marked = true

    createTable()

}
