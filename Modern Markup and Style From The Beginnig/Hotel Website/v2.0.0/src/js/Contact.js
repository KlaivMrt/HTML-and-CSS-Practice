import "../scss/contact.scss"
import Navbar from "./Navbar";
import Footer from "./Footer";

/**
 * Handles the contact.html page
 */
class Contact {
    #navEl;

    constructor() {
        this.#navEl = document.getElementById("navbar");
    }

    /**
     * Renders all necessary elements to the DOM
     */
    render = () => {
        this.#navEl.appendChild(Navbar.generate("contact"));
        document.body.appendChild(Footer.generate());
    }
}

const contact = new Contact();
contact.render();
