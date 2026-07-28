let taskbarApps;
let clock;
let startBtn;


/* =========================
   CREATE TASKBAR
========================= */

function createTaskbar(){

    const taskbar = document.createElement("div");

    taskbar.id = "taskbar";


    taskbar.innerHTML = `

        <button id="startBtn">
            ⊞
        </button>


        <div id="taskbarApps"></div>


        <div id="system-area">

            <span id="clock">
                00:00
            </span>

        </div>

    `;


    app.appendChild(taskbar);


    taskbarApps =
        document.querySelector("#taskbarApps");


    clock =
        document.querySelector("#clock");


    startBtn =
        document.querySelector("#startBtn");


    startBtn.addEventListener("click", () => {

        toggleStartMenu();

    });

}


/* =========================
   CREATE TASKBAR APP
========================= */
function createTaskbarIcon(app){

    console.log("Creating:", app.name);

    const button = document.createElement("button");

    button.classList.add("taskbar-app");

    button.textContent = app.icon;

    button.title = app.name;

    button.addEventListener("click", () => {

        createWindow(app);

    });

    taskbarApps.appendChild(button);

}


/* =========================
   CLOCK
========================= */

function updateClock(){

    if(!clock) return;


    const now =
        new Date();


    const time =
        now.toLocaleTimeString(
            [],
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        );


    clock.textContent = time;

}


function startClock(){

    updateClock();


    setInterval(() => {

        updateClock();

    }, 1000);

}


/* =========================
   INITIALIZE
========================= */

createTaskbar();

startClock();

apps.forEach(app => {

    createTaskbarIcon(app);

});