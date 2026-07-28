const desktop2 = document.querySelector("#desktop");

let highestZIndex = 10;


function createWindow(app) {

    highestZIndex++;

    const windowElement = document.createElement("div");

    windowElement.classList.add("window");

    windowElement.style.zIndex = highestZIndex;


    windowElement.innerHTML = `
        <div class="window-header">

            <div class="window-title">
                <span>${app.icon}</span>
                <span>${app.name}</span>
            </div>

            <div class="window-controls">

                <button class="window-btn minimize">
                    −
                </button>

                <button class="window-btn maximize">
                    □
                </button>

                <button class="window-btn close">
                    ×
                </button>

            </div>

        </div>

        <div class="window-content"></div>
    `;


    desktop2.append(windowElement);

    const content =
    windowElement.querySelector(".window-content");


if (app.name === "Files") {

    content.appendChild(
        createFileManager()
    );

} else {

    content.innerHTML = `
        <h2>${app.icon} ${app.name}</h2>

        <p style="margin-top: 15px;">
            Welcome to ${app.name}
        </p>
    `;

}


    /* Bring window to front */

    windowElement.addEventListener("mousedown", () => {

        highestZIndex++;

        windowElement.style.zIndex = highestZIndex;

    });


    /* Close */

    const closeBtn =
        windowElement.querySelector(".close");


    closeBtn.addEventListener("click", () => {

        windowElement.remove();

    });


    /* Minimize */

    const minimizeBtn =
        windowElement.querySelector(".minimize");


    minimizeBtn.addEventListener("click", () => {

        windowElement.style.display = "none";

    });


    /* Maximize */

    const maximizeBtn =
        windowElement.querySelector(".maximize");


    maximizeBtn.addEventListener("click", () => {

        windowElement.classList.toggle("maximized");

    });


    makeDraggable(windowElement);


    return windowElement;
}



function makeDraggable(windowElement) {

    const header =
        windowElement.querySelector(".window-header");


    let isDragging = false;

    let offsetX = 0;
    let offsetY = 0;


    header.addEventListener("mousedown", (e) => {

        isDragging = true;

        const rect = windowElement.getBoundingClientRect();

        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

        header.style.cursor = "grabbing";

    });


    document.addEventListener("mousemove", (e) => {

        if (!isDragging) return;


        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;


        windowElement.style.left = `${x}px`;

        windowElement.style.top = `${y}px`;

    });


    document.addEventListener("mouseup", () => {

        isDragging = false;

        header.style.cursor = "grab";

    });

}

// createWindow({
//     name: "Test",
//     icon: "🧪"
// });