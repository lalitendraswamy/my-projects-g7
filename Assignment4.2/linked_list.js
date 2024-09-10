class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addItem(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    getItem(index) {
        let current = this.head;
        for (let i = 0; i < index; i++) {
            if (current) {
                current = current.next;
            } else {
                throw new Error("Index out of range");
            }
        }
        if (current) {
            return current.data;
        } else {
            throw new Error("Index out of range");
        }
    }

    setItem(index, data) {
        let current = this.head;
        for (let i = 0; i < index; i++) {
            if (current) {
                current = current.next;
            } else {
                throw new Error("Index out of range");
            }
        }
        if (current) {
            current.data = data;
        } else {
            throw new Error("Index out of range");
        }
    }

    removeItem(index) {
        if (index === 0) {
            this.head = this.head.next;
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                if (current) {
                    current = current.next;
                } else {
                    throw new Error("Index out of range");
                }
            }
            if (current && current.next) {
                current.next = current.next.next;
            } else {
                throw new Error("Index out of range");
            }
        }
    }

    showItems() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    length() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }
}


const linkedList = new LinkedList();
linkedList.addItem(7);
linkedList.addItem(17);
linkedList.addItem(27);
linkedList.showItems();
console.log(`Length of the list: ${linkedList.length()}`);

linkedList.setItem(1, 62);
linkedList.showItems();
console.log(`Length of the list: ${linkedList.length()}`);

linkedList.removeItem(0);
linkedList.showItems();
console.log(`Item at index 1: ${linkedList.getItem(1)}`);


 
