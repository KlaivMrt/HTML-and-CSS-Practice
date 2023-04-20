import "../scss/about.scss";
import img1 from "../img/photo-2.jpg";
import img2 from "../img/test-bg.jpg";
import TestimonialsHandler from "./TestimonialsHandler";
import Navbar from "./Navbar";
import Footer from "./Footer";

/**
 * Handles the about.html page
 */
class About {
    #navEl;
    #tHandler;

    constructor() {
        this.#navEl = document.getElementById("navbar");
        this.#tHandler = new TestimonialsHandler();

        document.querySelector(".info-right").style.background = `url(${img1}) no-repeat center center/cover`;
        document.getElementById("testimonials").style.background = `url(${img2}) no-repeat center center/cover`;
    }

    /**
     * Renders all necessary elements to the DOM
     */
    render = () => {
        this.#tHandler.insertFront({
            name: "Sammy",
            testimonial: "High-end, very satisfied, I'll definitely."
        })
        this.#tHandler.insertFront({
            name: "Fatjon",
            testimonial: "Quite positive environment, exceptional food and great wine. Totally worth it."
        })
        this.#tHandler.insertFront({
            name: "Denis",
            testimonial: "No comments, it was one of the greates experiences ever."
        })
        this.#tHandler.insertFront({
            name: "Roni",
            testimonial: "I really enjoyed it, a great place to go for families."
        })
        
        this.#tHandler.render();
        this.#navEl.appendChild(Navbar.generate("about"));
        document.body.appendChild(Footer.generate());
    }
}

const about = new About();

about.render();
