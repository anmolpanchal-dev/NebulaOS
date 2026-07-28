let startMenu;

function createStartMenu(){

    startMenu=document.createElement("div");

    startMenu.id="start-menu";

    startMenu.innerHTML=`

        <div class="start-header">

            <input
                id="start-search"
                placeholder="Search Apps..."
            >

        </div>

        <div id="start-apps"></div>

    `;

    app.append(startMenu);

    renderStartApps();

}

function renderStartApps(){

    const container=
        document.querySelector("#start-apps");

    container.innerHTML="";

    apps.forEach(appData=>{

        const item=document.createElement("div");

        item.className="start-item";

        item.innerHTML=`

            <span>${appData.icon}</span>

            <span>${appData.name}</span>

        `;

        item.onclick=()=>{

            createWindow(appData);

            startMenu.classList.remove("show");

        }

        container.append(item);

    });

}

function toggleStartMenu(){

    startMenu.classList.toggle("show");

}