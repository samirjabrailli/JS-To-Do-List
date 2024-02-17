const inpVal = document.getElementById("toDoVal")

const listVal = document.getElementById("listVal")

let arr = []

function add() {
    let a = inpVal.value.trim()
    if (a != "") {
        listVal.innerHTML += `<li>
            <div> ${a} </div> <button onclick="sil(this)"> Delete </button>
            </li>`
    }
    inpVal.value = ""
}

function sil(button) {
    button.parentNode.remove()

}