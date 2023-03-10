navbar_menu = document.getElementById("navbar-menu");
toggler = document.querySelector("#toggler");

const uncheck = () => {
    if (toggler.checked) {
        toggler.checked = false;
    }
}

const showHandling = () => {
    if (toggler.checked) {
        navbar_menu.classList.add("show");
    } else {
        navbar_menu.classList.remove("show");
    }
}

toggler.addEventListener("click", showHandling);
window.addEventListener("load", uncheck);