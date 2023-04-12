const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");
const deleteTask = document.getElementsByTagName("span");
const li = document.querySelector("li");

button.addEventListener("click", addTask);

function addTask() {

        //li ekleme 
    if (input.value != "") {
        let paragraf = document.createElement("li");
        paragraf.innerHTML = input.value;
        ul.appendChild(paragraf);

        // x ekleme
        let span = document.createElement("span");
        span.classList = "deleteItem";
        span.innerHTML = "\u00d7";
        paragraf.appendChild(span);
    }
}

ul.addEventListener("click", sil);

function sil(e) {
         // console.log(e.target) ;  

    if (e.target.className === "deleteItem") {
        // console.log(e.target);
        e.target.parentElement.remove()
    }
}
