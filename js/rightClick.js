function createContextMenu(){
    let menu = document.createElement("div");
    menu.classList.add("menu");
    app.append(menu);
    const option = [
        "✏️ Rename",
        "📋 Copy",
        "🗑️ Delete",
    ]
    option.forEach(text => {
        const item = document.createElement("div");
        item.classList.add('item');
        item.textContent = text;
        menu.append(item);
    });
    return menu;
}

const menu = createContextMenu();
document.body.appendChild(menu);



document.addEventListener("contextmenu",function(e){
    e.preventDefault();
    menu.style.display = 'block';
    menu.style.left = e.clientX+"px";
    menu.style.top = e.clientY+"px";
});
document.addEventListener("click",function(e){
    menu.style.display = "none";
})