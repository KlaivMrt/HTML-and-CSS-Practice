import Node from "./Node";

class LinkedList {
    #length;
    #head;
    
    constructor() {
        this.#head = null;
        this.#length = 0;
    }

    get head() {
        return this.#head;
    }

    insertFront(value) {
        const newNode = new Node(value);
        newNode.next = this.#head;
        this.#head = newNode;
        this.#length++;
    }

    insertBack(value){
        const newNode = new Node(value);
        let current = this.#head;
        while(current) {
            current = current.next;
        }
        current.next = newNode;
        this.#length++;
    }

    print() {
        let data = "";
        let current = this.#head;

        while(current) {
            data += `${current.value} `;
            current = current.next;
        }

        console.log("List: " + data);
        console.log("Length: " + this.#length)
    }
}

export default LinkedList;