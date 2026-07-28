const fileSystem = {
    "/": [
        {
            name: "Documents",
            icon: "📁",
            type: "folder",
            path: "/Documents"
        },
        {
            name: "Downloads",
            icon: "📁",
            type: "folder",
            path: "/Downloads"
        },
        {
            name: "Projects",
            icon: "📁",
            type: "folder",
            path: "/Projects"
        },
        {
            name: "Pictures",
            icon: "📁",
            type: "folder",
            path: "/Pictures"
        },
        {
            name: "Resume.pdf",
            icon: "📄",
            type: "file"
        },
        {
            name: "Notes.txt",
            icon: "📄",
            type: "file"
        }
    ],

    "/Documents": [
        {
            name: "College Notes.txt",
            icon: "📄",
            type: "file"
        },
        {
            name: "Assignments",
            icon: "📁",
            type: "folder",
            path: "/Documents/Assignments"
        }
    ],

    "/Documents/Assignments": [
        {
            name: "Web Development.pdf",
            icon: "📄",
            type: "file"
        }
    ],

    "/Downloads": [],

    "/Projects": [
        {
            name: "NovaOS",
            icon: "📁",
            type: "folder",
            path: "/Projects/NovaOS"
        }
    ],

    "/Projects/NovaOS": [
        {
            name: "index.html",
            icon: "🌐",
            type: "file"
        },
        {
            name: "style.css",
            icon: "🎨",
            type: "file"
        },
        {
            name: "app.js",
            icon: "⚡",
            type: "file"
        }
    ],

    "/Pictures": []
};
function createFileManager() {

    const container = document.createElement("div");

    container.classList.add("file-manager");


    container.innerHTML = `

        <div class="file-toolbar">

            <button class="back-btn">⬅️</button>

            <button class="forward-btn">➡️</button>

            <input
                class="file-search"
                type="text"
                placeholder="Search files..."
            >

        </div>


        <div class="file-main">

            <div class="file-sidebar">

                <div class="file-sidebar-item">
                    🏠 Home
                </div>

                <div class="file-sidebar-item">
                    📄 Documents
                </div>

                <div class="file-sidebar-item">
                    ⬇️ Downloads
                </div>

                <div class="file-sidebar-item">
                    💻 Projects
                </div>

                <div class="file-sidebar-item">
                    🖼️ Pictures
                </div>

            </div>


            <div class="file-content"></div>

        </div>

    `;


    const content =
        container.querySelector(".file-content");

    const searchInput =
        container.querySelector(".file-search");

    const backBtn =
        container.querySelector(".back-btn");


    let currentPath = "/";


    function renderFiles(path = "/") {

        currentPath = path;

        content.innerHTML = "";


        const files = fileSystem[path] || [];


        files.forEach(file => {

            createFileItem(file);

        });

    }


    function createFileItem(file) {

        const item =
            document.createElement("div");

        item.classList.add("file-item");


        item.innerHTML = `

            <div class="file-icon">
                ${file.icon}
            </div>

            <div class="file-name">
                ${file.name}
            </div>

        `;


        /*
            Double click
        */

        item.addEventListener("dblclick", () => {

            if (file.type === "folder") {

                renderFiles(file.path);

            }

        });


        content.appendChild(item);

    }


    /*
        Back button
    */

    backBtn.addEventListener("click", () => {

        if (currentPath === "/") {
            return;
        }


        const parts =
            currentPath.split("/");


        parts.pop();


        let parentPath =
            parts.join("/");


        if (parentPath === "") {
            parentPath = "/";
        }


        renderFiles(parentPath);

    });


    /*
        Search
    */

    searchInput.addEventListener("input", () => {

        const search =
            searchInput.value.toLowerCase();


        const files =
            fileSystem[currentPath] || [];


        content.innerHTML = "";


        files
            .filter(file =>
                file.name
                    .toLowerCase()
                    .includes(search)
            )
            .forEach(file => {

                createFileItem(file);

            });

    });


    /*
        Sidebar
    */

    const sidebarItems =
        container.querySelectorAll(
            ".file-sidebar-item"
        );


    sidebarItems[0].addEventListener(
        "click",
        () => renderFiles("/")
    );


    sidebarItems[1].addEventListener(
        "click",
        () => renderFiles("/Documents")
    );


    sidebarItems[2].addEventListener(
        "click",
        () => renderFiles("/Downloads")
    );


    sidebarItems[3].addEventListener(
        "click",
        () => renderFiles("/Projects")
    );


    sidebarItems[4].addEventListener(
        "click",
        () => renderFiles("/Pictures")
    );


    renderFiles("/");


    return container;
}