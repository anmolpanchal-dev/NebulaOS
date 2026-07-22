let app = document.querySelector("#app")
let main = document.createElement("div");
main.textContent = "hello"
main.classList.add('main')
app.appendChild(main);

function addBox() {
    const div = document.createElement("div");

    div.classList.add("box");
    div.textContent = "New Box";

    main.appendChild(div);
}

addBox()