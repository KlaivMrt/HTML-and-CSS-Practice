/**
 * Generats the footer element
 */
class Footer {
    static generate() {
        const footer = document.createElement("footer");
        const p = document.createElement("p");
        p.innerHTML = "Hotel MrT &#169; 2023, All rights reserved.";
        footer.appendChild(p);
        return footer;
    }
}

export default Footer;
