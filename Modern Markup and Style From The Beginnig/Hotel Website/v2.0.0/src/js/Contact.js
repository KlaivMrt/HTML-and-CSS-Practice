import Navbar from "./Navbar";
import Footer from "./Footer";

class Contact {
    #navEl;

    constructor() {
        this.#navEl = document.getElementById("navbar");
    }

    render = () => {
        this.#navEl.appendChild(Navbar.generate("contact"));
        document.body.appendChild(Footer.generate());
    }
}

const contact = new Contact();
contact.render();
