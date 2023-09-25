const menu = document.getElementById("menu");
const openButton = document.getElementsByClassName("menu-icon")[0];
const closeButton = document.getElementsByClassName("close-icon")[0];

openButton.onclick = () => {
    menu.classList.add("open");
}

closeButton.onclick = () => {
    menu.classList.remove("open");
}