menu_controller = document.getElementById("menu-controller");

nav = document.getElementById("list");

const show = () => {
    if (menu_controller.checked) {
        console.log("ok");
        nav.classList.add("show");
    } else {
        nav.classList.remove("show");
        menu_controller.checked = false;
    }
}

const uncheck = () => {
    if (menu_controller.checked) {
        console.log("ok");
        menu_controller.checked = false;
    }
}

menu_controller.addEventListener("click", show);

console.log(nav)
console.log(menu_controller)

// window.addEventListener("load", show)
window.addEventListener("load", uncheck)