function MyLinkedList() {
    this.head = null; // Head pointer to the first node of the linked list
    this.size = 0; // Tracks the size (number of nodes) of the linked list

    // Inner Node constructor to create new nodes
    function Node(val) {
        this.val = val; // Value stored in the node
        this.next = null; // Pointer to the next node
    }

    // Get value at a given index
    this.get = (index) => {
        if (index < 0 || index >= this.size) { // If index is invalid
            return -1;
        }
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {  // Traverse to the given index
            currentNode = currentNode.next;
        }
        return currentNode.val;
    };

    // Add a node at the beginning (head) of the linked list
    this.addAtHead = (val) => {
        const newNode = new Node(val); // Create new node
        newNode.next = this.head; // Point it to current head
        this.head = newNode; // Make new node the head
        this.size++; // Increase list size
    }

    // Add a node at the end (tail) of the linked list
    this.addAtTail = (val) => {
        const newNode = new Node(val); // Create new node
        if (!this.head) { // If list is empty, new node becomes head
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next) { // Traverse to the last node
                currentNode = currentNode.next;
            }
            currentNode.next = newNode; // Link last node to new node
        }
        this.size++; // Increase list size
    };

    // Add a node at a specific index
    this.addAtIndex = () => {
        if (index < 0 || index > this.size) return; // If index is invalid

        if (index === 0) { // Insert at head
            this.addAtHead(val);
            return;
        }

        if (index === this.size) { // Insert at tail
            this.addAtTail(val);
            return;
        }

        const newNode = new Node(val); // Create new node

        let currentNode = this.head;
        for (let i = 0; i < index - 1; i++) {  // Traverse to the node just before the index
            currentNode = currentNode.next;
        }
        // Insert new node in between
        newNode.next = currentNode.next;
        currentNode.next = newNode;

        this.size++; // Increase list size
    }

    // Delete node at a specific index
    this.deleteAtIndex = (index) => {
        if (index < 0 || index >= this.size) return; // If index is invalid
        if (index === 0) { // Remove head
            this.head = this.head.next;
        } else {
            let currentNode = this.head;
            for (let i = 0; i < index - 1; i++) { // Traverse to the node just before the index
                currentNode = currentNode.next;
            }
            currentNode.next = currentNode.next.next; // Skip the node at the index
        }
        this.size--; // Decrease list size
    }
}

// Example usage:
const linkedList = new MyLinkedList();

// Adding elements to the list
linkedList.addAtTail(1);
linkedList.addAtTail(2);
linkedList.addAtTail(3);
linkedList.addAtTail(4);
linkedList.addAtTail(5);

// Print head node and size
console.log(linkedList.head);
console.log(linkedList.size);

let prev = this.head;
let oneTime = true;
while(prev.next){
    let current = prev.next;
    let nextNode = current.next;
    current.next = prev;
    nextNode.next = current;
    if(oneTime){
        // prev.next = null;
        oneTime = false;
    }
   prev++;
}
console.log(linkedList.head);


