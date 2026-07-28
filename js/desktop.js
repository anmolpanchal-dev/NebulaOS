let desktop;



function createDesktop(){

    desktop = document.createElement("div");

    desktop.id = "desktop";


    app.append(desktop);


    renderDesktopIcons();

}




function createDesktopIcon(appData){


    const icon =
        document.createElement("div");


    icon.classList.add(
        "desktop-icon"
    );


    icon.innerHTML = `

        <div class="icon-image">
            ${appData.icon}
        </div>


        <div class="icon-name">
            ${appData.name}
        </div>

    `;


    desktop.appendChild(icon);



    icon.addEventListener(
        "dblclick",
        ()=>{

            createWindow(appData);

        }
    );


}




function renderDesktopIcons(){


    apps.forEach(appData=>{

        createDesktopIcon(appData);

    });


}