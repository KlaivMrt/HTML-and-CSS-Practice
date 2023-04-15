import "../scss/home.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";

class Home {
    #navEl;

    constructor() {
        this.#navEl = document.getElementById("navbar");
    }

    render = () => {
        this.#navEl.appendChild(Navbar.generate("home"));
        document.body.appendChild(Footer.generate());
    }
}

const home = new Home();
home.render();
