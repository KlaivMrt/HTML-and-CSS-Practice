import LinkedList from "./LinkedList";

/**
 * Handles the testimonial section on the about.html page
 * 
 * @todo use async calls to get the testimonials from an outer source and save them using a linked list
 */
class TestimonialsHandler extends LinkedList{
    #containerEl;
    
    constructor() {
        super();
        this.#containerEl = document.querySelector("#testimonials .container");
    }

    /**
     * Generates a single testimonial element
     * 
     * @param {Object} data 
     * @returns {Element} testimonial
     */
    #testimonialEl(data) {
        const testimonial = document.createElement("div");
        testimonial.className = "testimonial";
        
        const h3 = document.createElement("h3");
        const p = document.createElement("p");

        h3.textContent = data.name;
        p.textContent = data.testimonial;
        testimonial.appendChild(h3);
        testimonial.appendChild(p);

        return testimonial;
    }

    /**
     * Renders all testimonial elements generated
     */
    render() {
        let current = this.head;
        while(current) {
            this.#containerEl.appendChild(this.#testimonialEl(current.value));
            current = current.next;
        }
    }
}

export default TestimonialsHandler;
