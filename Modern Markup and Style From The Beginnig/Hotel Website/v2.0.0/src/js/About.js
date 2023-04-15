import Navbar from "./Navbar";
import Footer from "./Footer";

class About {
    #navEl;

    constructor() {
        this.#navEl = document.getElementById("navbar");
    }

    render = () => {
        this.#navEl.appendChild(Navbar.generate("about"));
        document.body.appendChild(Footer.generate());
    }
}

const about = new About();
about.render();
