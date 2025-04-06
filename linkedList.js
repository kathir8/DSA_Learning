class Node {
    constructor(data, next) {
        this.data = data
        this.next = next
    }
}

// Class to hold our data structure
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Complexity: O(1)
    prepend(value) {
        const newNode = new Node(value, this.head);
        this.head = newNode;
        this.tail = this.tail ? this.tail : newNode;
        return this;
    }

    // Complexity: O(1)
    append(value) {
        const newNode = new Node(value);
        // If the linked list is empty
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        // Make the last item refer to the newly added node
        this.tail.next = newNode;
        // Make the newly added node the last/tail node
        this.tail = newNode;
    }

    // Complexity: O(n)
    traverse() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }

    // Complexity: O(n)
    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;

        while (current) {
            next = current.next; // Save next node
            current.next = prev; // Reverse pointer
            prev = current; // Move prev forward
            current = next; // Move current forward
        }

        this.head = prev; // Update head to the new first node
    }

    // Complexity: O(n)
    find(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.data === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    secondLast() {
        let currentNode = this.head;
        if (currentNode.next) {
            do {
                if (!currentNode.next.next) {
                    return currentNode;
                }
                currentNode = currentNode.next;
            } while (currentNode)
        }
        return null;
    }

    // Complexity: O(1)
    deleteHead() {
        if (!this.head) {
            return;
        }
        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
            this.tail = null;
        }
    }

    // Complexity: O(1)
    deleteNodes(value) {
        if (!this.head) return

        let currentNode = this.head;
        let prevNode = this.head;

        while (currentNode) {
            if (currentNode.data === value) {
                prevNode.next = currentNode.next
                return
            }
            prevNode = currentNode
            currentNode = currentNode.next
        }
    }

    deleteNode(value) {
        if (!this.head) return;

        // If the head node itself needs to be deleted
        if (this.head.data === value) {
            this.head = this.head.next;
            if (!this.head) this.tail = null; // If list becomes empty, update tail
            return;
        }

        let prev = null;
        let current = this.head;

        // Traverse the list to find the node
        while (current && current.data !== value) {
            prev = current;
            current = current.next;
        }

        // If node is found, update the next pointer to skip the deleted node
        if (current) {
            prev.next = current.next;

            // If deleting the tail, update the tail reference
            if (current === this.tail) {
                this.tail = prev;
            }
        }
    }

    deleteTail() {
        if (!this.head) {
            return; // Empty list, nothing to remove
        }

        if (!this.head.next) {
            this.head = null; // Only one node in the list, remove it
            this.tail = null; // Only one node in the list, remove it
            return;
        }

        let temp = this.head;
        while (temp.next.next) { // Stop at second-last node
            temp = temp.next;
        }

        temp.next = null; // Remove last node
        this.tail = temp;
    }

    findMiddle() {
        if (!this.head) return null; // Empty list

        let slow = this.head;
        let fast = this.head;

        while (fast && fast.next) {
            slow = slow.next;      // Move one step
            fast = fast.next.next; // Move two steps
        }

        return slow.data; // Middle node's value
    }

    // Complexity: O(n)
    toArray() {
        const items = [];
        let currentNode = this.head;
        while (currentNode) {
            items.push(currentNode.data);
            currentNode = currentNode.next;
        }
        return items;
    }

    hasCycle() {
        let slow = list.head;
        let fast = list.head;

        while (fast && fast.next) {
            slow = slow.next;      // Move one step
            fast = fast.next.next; // Move two steps

            if (slow === fast) {   // If they meet, cycle detected
                return true;
            }
        }
        return false; // No cycle
    }


    // Create a cycle manually for testing
    createCycle(position) {
        if (!this.head) return;
        let temp = this.head;
        let cycleNode = null;
        let index = 0;

        while (temp.next) {
            if (index === position) cycleNode = temp;
            temp = temp.next;
            index++;
        }
        temp.next = cycleNode; // Create cycle
    }

    RemoveDuplicateFromSorted(){
        let currentNode = this.head;
        while (currentNode.next) {
            if (currentNode.data === currentNode.next.data) {
                currentNode.next = currentNode.next.next;  // Skip the duplicate node
                if (currentNode.next === null) { // If we removed the last node, update tail
                    this.tail = currentNode;
                }
            } else {
                currentNode = currentNode.next;
            }
        }
    }
}

const list1 = new LinkedList();
const list2 = new LinkedList();
const out = new LinkedList();

const inp = [list1.append(1), list1.append(3), list1.append(5)]
const inp2 = [list2.append(2), list2.append(4), list2.append(6)];

let currentNode1 = list1.head;
let currentNode2 = list2.head;
if(currentNode1.data < currentNode2.data){
    out.append(currentNode1.data);
}else{
    out.append(currentNode2.data);
}
console.log(list.toArray());

const i1=[1,3,5];
const i2=[2,4,6];

const output = [1,2,3,4,5,6];