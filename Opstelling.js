function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    let figuur = document.getElementById(data)
    ev.target.style.backgroundImage = "url(" + figuur.src + ")";
    //ev.target.appendChild(document.getElementById(data));
}