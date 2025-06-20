// function ListNode(val, next) {
//      this.val = (val===undefined ? 0 : val)
//      this.next = (next===undefined ? null : next)
// }


class Node {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;

        }
        this.size++;
    }

    prepend(val) {
        this.head = new Node(val, this.head);
        this.size++;
    }

}


const list = new LinkedList();
list.append(2);
list.prepend(1);
console.log(list.head);
