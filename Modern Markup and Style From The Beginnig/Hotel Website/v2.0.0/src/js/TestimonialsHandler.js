import LinkedList from "./LinkedList";

class TestimonialsHandler extends LinkedList{
    #containerEl;
    
    constructor() {
        super();
        this.#containerEl = document.querySelector("#testimonials .container");
    }

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

    render() {
        let current = this.head;
        while(current) {
            this.#containerEl.appendChild(this.#testimonialEl(current.value));
            current = current.next;
        }
    }
}

export default TestimonialsHandler;
