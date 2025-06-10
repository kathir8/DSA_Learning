function LinkedList() {
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

    // Converts the linked list into an array of values
    this.convertToArray = () => {
        let current = this.head; // Start from the head node
        const output = [];
        while (current) { // Traverse until the end of the list
            output.push(current.val);
            current = current.next;
        }
        return output;
    }

    // Reverses the linked list in-place
    this.ReverseLinkedList = () => {
        let prev = null;  // Initially, the previous node is null (will become the new tail)
        let current = this.head;  // Start from the head of the list
        while (current) {
            const nextNode = current.next; // Store reference to the next node
            current.next = prev; // Reverse the pointer (make current point to previous)
            prev = current;
            current = nextNode;
        }
        this.head = prev; // Update head to the new first node (previous tail)
    }

    // Creates a cycle in the linked list by connecting the last node to the node at the given index
    this.createCycle = (index) => {
        if (index < 0 || index >= this.size) return;

        let target = this.head;
        for (let i = 0; i < index; i++) {
            target = target.next; // Node to form cycle with
        }

        let tail = this.head;
        while (tail.next) {
            tail = tail.next; // Go to last node
        }
        tail.next = target; // Create the cycle
    }

    // Detects if the linked list has a cycle using a Set to track visited nodes
    this.hasCycle = (bruteForce) => {

        if (bruteForce) {
            let current = this.head;
            const visitedNodes = new Set(); // To store seen node references
            while (current) {
                if (visitedNodes.has(current)) {
                    return true;  // cycle exists
                }
                visitedNodes.add(current); // Mark this node as visited
                current = current.next; // Move to the next node
            }
            return false; // No cycle found
        }
        
        // Floyd's Tortoise and Hare algorithm (slow & fast pointer approach)
        let slow = this.head; // Moves one step at a time
        let fast = this.head; // Moves two steps at a time

        while (fast?.next) {
            slow = slow.next;          // Move slow pointer one step
            fast = fast.next.next;     // Move fast pointer two steps

            if (slow === fast) {
                // If they meet, there's a cycle
                return true;
            }
        }

        // Fast reached the end → no cycle
        return false;


        if (false) {

        }
    }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.addAtTail(1);
linkedList.addAtTail(2);
linkedList.addAtTail(3);
linkedList.addAtTail(3);
linkedList.addAtTail(2);
linkedList.addAtTail(2);



let slow = linkedList.head;
let fast = linkedList.head;
while(fast && fast.next){
    slow = slow.next;
    fast = fast.next.next;
}

let prev = null;
let current = slow;
while(current){
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
}

slow = prev;

console.log(slow);
console.log(linkedList.head);
console.log("-----");
let secondHalf = slow;
let firstHalf = linkedList.head;
while (secondHalf) {
    if(firstHalf.val !== secondHalf.val) {
        console.log(false);
        return false;
    }
    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
}
console.log(true);

return true;



/*
3 -> 2 -> 1
1 -> 2 -> 3
3 <- 2 <- 1
*/

