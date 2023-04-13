function add_modifyContact() {

    let item_id = document.getElementById("item_id").value;
    console.log(item_id)
    if (item_id === "") {
        addContact()
    } else {
        modifyContact()
    }

    document.getElementById("item_id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";


}


function generate_id() {
    const counter = 5;
    const id = "abcdefgijk";
    let result = []

    for (let i = 0; i < counter; i++) {
        random = id[Math.floor(Math.random() * id.length)]
        result.push(random)
    }
    return result.join("")
}

function addContact() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;

    if (name != "" && phone != "") {
        let item = document.createElement("div");
        item.className = "item";
        item.id = generate_id();

        let contact = document.createElement("div");
        contact.className = "contact";
        contact.innerText = name;

        let no = document.createElement("div");
        no.className = "no";
        no.innerHTML = phone;

        let modify = document.createElement("button");
        modify.innerText = "Modify";
        modify.className = "modify";
        modify.onclick = function (event) {
            modifyClick(item.id)



        }


        let deleteElement = document.createElement("button");
        deleteElement.innerText = "Delete";
        deleteElement.className = "delete";
        deleteElement.onclick = function (event) {
            deleteContact(item.id)
        }

        item.appendChild(contact);
        item.appendChild(no);
        item.appendChild(modify);
        item.appendChild(deleteElement)

        let main = document.getElementsByClassName("main-data")[0]
        main.appendChild(item)

        return item
    }


}



function modifyClick(id) {
    let contact = document.querySelector(`#${id} .contact`);
    let no = document.querySelector(`#${id} .no`);
    document.getElementById("name").value = contact.innerText;
    document.getElementById("phone").value = no.innerHTML;
    document.getElementById("item_id").value = id;
    console.log(id)

}

function deleteContact(id) {
    let item = document.getElementById(id);
    item.remove()

}

function modifyContact() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let item_id = document.getElementById("item_id").value
    let contact = document.querySelector(`#${item_id} .contact`);
    let no = document.querySelector(`#${item_id} .no`);
    contact.innerText = name;
    no.innerHTML = phone;

}