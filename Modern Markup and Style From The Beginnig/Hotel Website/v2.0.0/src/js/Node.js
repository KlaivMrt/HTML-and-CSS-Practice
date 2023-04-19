class Node {
    #value;
    
    constructor(value) {
        this.#value = value;
        this.next = null;
    }

    get value() {
        return this.#value;
    }
}

export default Node;
