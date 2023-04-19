import shCase0 from "../img/showcase0.jpg";
import shCase1 from "../img/showcase1.jpg";
import photo1 from "../img/photo-1.jpg";
import "../scss/home.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";

class Home {
    #navEl;
    #showCaseEl;

    #showCases;
    #shI;

    constructor() {
        this.#showCases = [shCase0, shCase1];
        this.#shI = 0;
        
        this.#navEl = document.getElementById("navbar");
        this.#showCaseEl = document.getElementById("showcase");

        document.querySelector("#home-info .info-img").style.background = `url(../${photo1}) no-repeat center center/cover`;
    }

    #showcaseEffect = () => {
        this.#showCaseEl.style.background = `url(../${this.#showCases[this.#shI]}) no-repeat center center/cover`; 
        this.#shI++;
        if(this.#shI === this.#showCases.length) {
            this.#shI = 0;
        }
        setTimeout(() => this.#showcaseEffect(), 4000);
    }

    setEffects() {
        // setInterval(this.#showcaseEffect, 4000)
        this.#showcaseEffect();
        
    }

    render = () => {
        this.#navEl.appendChild(Navbar.generate("home"));
        document.body.appendChild(Footer.generate());
    }
}

const home = new Home();
home.setEffects();
home.render();
