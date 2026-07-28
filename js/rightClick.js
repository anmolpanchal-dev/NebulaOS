const app = document.querySelector("#app");


function createContextMenu() {

    const menu = document.createElement("div");

    menu.classList.add("menu");

    const options = [
        "🔄 Refresh",
        "📁 New Folder",
        "📋 Paste",
        "⚙️ Settings"
    ];


    options.forEach(text => {

        const item = document.createElement("div");

        item.classList.add("item");

        item.textContent = text;

        menu.append(item);

    });


    app.append(menu);

    return menu;
}


const menu = createContextMenu();


document.addEventListener("contextmenu", function (e) {

    e.preventDefault();

    menu.style.display = "block";

    menu.style.left = `${e.clientX}px`;

    menu.style.top = `${e.clientY}px`;

});


document.addEventListener("click", function () {

    menu.style.display = "none";

});