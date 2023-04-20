import line from "../img/line.png";
import UtilEl from "./Utilities";

/**
 * Generates the navbar
 */
class Navbar {

    static #logo() {
        const logo = document.createElement("h1");
        logo.className = "logo home-logo";
        logo.textContent = "HMrT";
        return logo;
    }

    static #aLink(textContent, relPath) {
        const a = document.createElement("a");
        a.textContent = textContent;
        a.href = relPath;
        return a;
    }

    static #li() {
        return document.createElement("li");
    }

    static #navList(current) {
        const navList = document.createElement("ul");
        navList.id = "navbar-menu";

        const li1 = this.#li();
        const aHome = this.#aLink("Home", "./index.html");
        
        const li2 = this.#li();
        const aAbout = this.#aLink("About", "./about.html");
        
        const li3 = this.#li();
        const aContact = this.#aLink("Contact", "./contact.html");

        switch(current) {
            case "home":
                aHome.classList.add("current");
                break;
            case "about":
                aAbout.classList.add("current");
                break;
            case "contact":
                aContact.classList.add("current");
                break;
        }

        li1.appendChild(aHome);
        li2.appendChild(aAbout);
        li3.appendChild(aContact);

        navList.appendChild(li1);
        navList.appendChild(li2);
        navList.appendChild(li3);

        return navList;
    }

    static #showHandler(e) {
        const toggler = document.getElementById("toggler");
        const navbar_menu = document.getElementById("navbar-menu");
        
        if(toggler.checked) {
            navbar_menu.classList.add("show");
        } else {
            navbar_menu.classList.remove("show");
        }
    }

    static generate(current) {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "toggler";
        checkbox.addEventListener("click", this.#showHandler)

        const lines = document.createElement("img");
        lines.src = line;
        lines.id="img-lines";

        const logoEl = this.#logo();
        const nav = this.#navList(current);

        const container = UtilEl.container();
        container.appendChild(checkbox);
        container.appendChild(lines);
        container.appendChild(logoEl);
        container.appendChild(nav);

        return container;
    }
}

export default Navbar;
