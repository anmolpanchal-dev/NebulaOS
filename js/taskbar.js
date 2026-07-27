const desktop = document.querySelector("#desktop");
const taskbarApps = document.querySelector("#taskbarApps");
const clock = document.querySelector("#clock");


const apps = [
    {
        name: "Files",
        icon: "📁"
    },

    {
        name: "Notes",
        icon: "📝"
    },

    {
        name: "Terminal",
        icon: "💻"
    },

    {
        name: "Browser",
        icon: "🌐"
    },

    {
        name: "Settings",
        icon: "⚙️"
    }
];

function createDesktopIcon(app) {

    const icon = document.createElement("div");

    icon.classList.add("desktop-icon");

    icon.innerHTML = `
        <div class="icon-image">${app.icon}</div>
        <div class="icon-name">${app.name}</div>
    `;

    desktop.append(icon);


    icon.addEventListener("dblclick", () => {

        createWindow(app);

    });


    return icon;
}


function createTaskbarIcon(app) {

    const button = document.createElement("button");

    button.classList.add("taskbar-app");

    button.textContent = app.icon;

    taskbarApps.append(button);
}


apps.forEach(app => {

    createDesktopIcon(app);

    createTaskbarIcon(app);

});



function updateClock() {

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();

    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");

    clock.textContent = `${hours}:${minutes}`;
}


updateClock();

setInterval(updateClock, 1000);