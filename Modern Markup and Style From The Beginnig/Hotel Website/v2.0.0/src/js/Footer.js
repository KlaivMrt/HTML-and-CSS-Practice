import UtilEl from "./Utilities";

class Footer {
    static generate() {
        const footer = document.createElement("footer");
        const p = document.createElement("p");
        p.textContent = "Hotel MrT &copy; 2023, All rights reserved.";
        footer.appendChild(p);
        return footer;
    }
}

export default Footer;
