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

    addAtIndex(index, val) {
        if (index < 0 || index > this.size) {
            throw new Error("Index not valid");
        } else if (index === 0) {
            this.prepend(val);
        } else if (index === this.size) {
            this.append(val);
        } else {
            let current = this.head;
            let nodeInd = 0;
            while (current) {
                if (nodeInd === index - 1) {
                    const newNode = new Node(val, current.next);
                    current.next = newNode;
                    this.size++;
                    break;
                }
                current = current.next;
                nodeInd++;
            }
        }
    }

    deleteAtIndex(index) {
        if (index < 0 || index >= this.size) {
            throw new Error("Index is not valid");
        } else {
            const sentinelNode = new Node(null, this.head);
            let current = sentinelNode;
            let nodeInd = 0;
            while (current) {
                if (nodeInd === index) {
                    current.next = current.next.next;
                    this.size--;
                    break;
                }
                current = current.next;
                nodeInd++;
            }
            this.head = sentinelNode.next;
        }
    }

    get(index) {
        if (index < 0 || index >= this.size) {
            return -1;
        } else if (index === 0) {
            return this.head.val;
        } else {
            let current = this.head;
            let nodeInd = 0;
            while (current) {
                if (nodeInd === index) {
                    return current.val;
                }
                current = current.next;
                nodeInd++;
            }
        }
    }

    reverse() {
        let current = this.head;
        let prev = null;
        while (current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

    middleNode() {
        let slow = this.head;
        let fast = this.head;
        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow;
    }

    hasCycle(bruteForce) {
        if (bruteForce) { // hash table
            let current = this.head;
            const uniqNode = new Set();
            while (current) {
                if (uniqNode.has(current)) {
                    return true
                } else {
                    uniqNode.add(current);
                    current = current.next;
                }
            }
            return false;
        } else { // Floyd's algorithm
            let slow = this.head;
            let fast = this.head;

            while (fast.next) {
                fast = fast.next.next;
                slow = slow.next;
                if (slow === fast) return true;
            }
            return false;
        }
    }

    createCycle(index) {
        if (index < 0 || index >= this.size) {
            throw new Error("Index is not valid");
        }
        let target = this.head;
        for (let i = 0; i < index.length; i++) {
            target = target.next;
        }

        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = target;
    }

    isPalindrome() {
        let first = this.head;

        let second = this.middleNode();
        let current = second;
        let prev = null;
        while (current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        second = prev;

        while (second) {
            if (first.val !== second.val) return false;
            second = second.next;
            first = first.next;
        }
        return true;

    }

    convertToArray() {
        let current = this.head;
        const output = [];
        while (current) {
            output.push(current.val);
            current = current.next;
        }
        return output;
    }
}


const list = new LinkedList();
// list.append(2);
// list.prepend(1);
// list.append(3);
// list.append(4);
// list.append(6);
// list.addAtIndex(4, 5);

list.append(1);
list.append(2);
// list.append(3);
// list.append(3);
// list.append(2);
// list.append(1);
console.log(list.isPalindrome());
// console.log(list.convertToArray());

// 1 2 4 5