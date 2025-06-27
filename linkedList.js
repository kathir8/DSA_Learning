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

    removeGivenVal(val) {
        const sentinelNode = new Node(null, this.head);
        let prev = sentinelNode;
        while (prev && prev.next) {
            if (prev.next.val === val) {
                prev.next = prev.next.next;
                this.size--;
            } else {
                prev = prev.next;
            }
        }
        this.head = sentinelNode.next;
    }

    removeNthFromEnd(ind) {
        const sentinelNode = new Node(null, this.head);
        let slow = sentinelNode;
        let fast = sentinelNode;
        let nodeInd = 0;
        while (fast) {
            if (ind < nodeInd) {
                slow = slow.next;
            }
            fast = fast.next;
            nodeInd++;
        }

        // guard against invalid input
        if (ind >= nodeInd) {
            console.warn("Invalid index: longer than list length");
            return;
        }

        slow.next = slow.next.next;
        this.head = sentinelNode.next;
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

const input = [
    [[1, 2, 3, 4]],
    [[2]],
    [[1]],
    [[1, 2, 3]],
];
const inpIndex = 0;

input.forEach((x, i) => {
    if (inpIndex === -1 || i === inpIndex) {
        let list1 = x[0];
        if (Array.isArray(x[0])) {
            list1 = new LinkedList();
            x[0].forEach(y => list1.append(y));
        }
        let list2 = x[1];
        if (Array.isArray(x[1])) {
            list2 = new LinkedList();
            x[1].forEach(y => list2.append(y));
        }
        executeMethod(list1.head || list1, list2?.head || list2);
    }
});


function executeMethod(l1, k) {
    let output = l1;
    let t1 = l1;
    let t2 = l1.next;
    while(t2 && t2.next){
        let temp = t2.next;
        t2.next = t1;
        t1.next = temp;
        t1 = temp;
        t2 = temp.next;
    }
    convertNodeToArray(l1);

}
function convertNodeToArray(node) {
    const output = [];
    while (node) {
        output.push(node.val);
        node = node.next;
    }
    console.log(output);

}