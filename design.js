function LinkedList() {
    this.head = null; // Head pointer to the first node of the linked list
    this.size = 0; // Tracks the size (number of nodes) of the linked list

    // Inner Node constructor to create new nodes
    function Node(val) {
        this.val = val; // Value stored in the node
        this.next = null; // Pointer to the next node
    }

    // Get value at a given index - O(n), O(1)
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

    // Add a node at the beginning (head) of the linked list - O(1), O(1)
    this.addAtHead = (val) => {
        const newNode = new Node(val); // Create new node
        newNode.next = this.head; // Point it to current head
        this.head = newNode; // Make new node the head
        this.size++; // Increase list size
    }

    // Add a node at the end (tail) of the linked list - O(n), O(1)
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

    // Add a node at a specific index - O(n), O(1)
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

    // Delete node at a specific index - O(n), O(1)
    this.deleteAtIndex = (index) => {
        if (index < 0 || index >= this.size) return; // If index is invalid
        let sentinel = new Node(); // Dummy node to handle edge cases (like deleting the head)
        sentinel.next = this.head;
        let prev = sentinel;
        for (let i = 0; i < index; i++) { // Traverse to the node just before the index
            prev = prev.next;
        }
        prev.next = prev.next.next; // Skip the node at the index
        this.head = sentinel.next; // Assign the node to head
        this.size--; // Decrease list size
    }

    // Delete all nodes with a given value from the linked list - O(n), O(1)
    this.deleteByValue = (target) => {
        let setinel = new Node(); // Dummy node to handle edge cases (like deleting the head)
        setinel.next = this.head;

        let prev = setinel; // Start with the dummy node as the previous node

        // Traverse the entire list
        while (prev && prev.next) {
            if (prev.next.val === target) {
                prev.next = prev.next.next; // If the value of the next node matches the target, skip it
            } else {
                prev = prev.next; // Otherwise, move forward
            }
        }
        this.head = setinel.next;  // After deletion, update the head in case the first node(s) were deleted
    }

    // Removes the N-th node from the end of the linked list - O(n), O(1)
    this.removeNthFromEnd = (target, bruteForce) => {
        if (bruteForce) {
            const length = this.findSize(); // Step 1: Get the size of the linked list - O(n)
            this.deleteAtIndex(length - target); // Step 2: Remove the (length - target)-th node from the beginning - O(n)
        } else { // O(n), O(1)
            let sentinel = new Node(); // Dummy node to handle edge cases (like deleting the head)
            sentinel.next = this.head;

            let slow = sentinel; // Will eventually point to the node before the one to delete
            let fast = sentinel; // Will move 'target' steps ahead
            let i = 0;

            // Move the fast pointer to the end of the list
            while (fast) {
                if (i > target) { // Start moving slow only after fast is 'target + 1' steps ahead to maintain 'target' number of node gap between slow and fast pointer
                    slow = slow.next;
                }
                fast = fast.next;
                i++;
            }
            slow.next = slow.next.next; // Remove the target-th node from the end
            this.head = sentinel.next; // Assign the node to head
            this.size--; // Decrease list size
        }
    }

    this.findSize = () => {
        let current = this.head;
        let length = 0;
        while (current) {
            current = current.next;
            length++;
        }
        return length;
    }
    // Converts the linked list into an array of values - O(n), O(n)
    this.convertToArray = () => {
        let current = this.head; // Start from the head node
        const output = [];
        while (current) { // Traverse until the end of the list
            output.push(current.val);
            current = current.next;
        }
        return output;
    }

    // Reverses the linked list in-place - O(n), O(1)
    this.ReverseLinkedList = (node) => {
        let prev = null;  // Initially, the previous node is null (will become the new tail)
        let current = node ?? this.head;  // Start from the given node / head of the list
        while (current) {
            const nextNode = current.next; // Store reference to the next node
            current.next = prev; // Reverse the pointer (make current point to previous)
            prev = current;
            current = nextNode;
        }
        if (node) {
            return prev;
        }
        this.head = prev; // Update head to the new first node (previous tail)
    }

    // Creates a cycle in the linked list by connecting the last node to the node at the given index - O(n), O(1)
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

        if (bruteForce) { // O(n), O(n)
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

        // Floyd's Tortoise and Hare algorithm (slow & fast pointer approach) - O(n), O(1)
        let slow = this.head; // Moves one step at a time
        let fast = this.head; // Moves two steps at a time

        while (fast && fast.next) {
            slow = slow.next;          // Move slow pointer one step
            fast = fast.next.next;     // Move fast pointer two steps

            if (slow === fast) return true; // If they meet, there's a cycle
        }

        // Fast reached the end → no cycle
        return false;
    }

    // Returns the middle node of the linked list
    this.midNode = () => {
        let slow = this.head; // Moves one step at a time
        let fast = this.head; // Moves two steps at a time

        // When fast reaches the end, slow will be at the midpoint
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow; // Slow is now pointing to the middle node
    }

    // Checks if the linked list is a palindrome - O(n), O(1)
    this.isPalindrome = () => {
        const midNode = this.midNode(); // Step 1: Find the middle node

        // Step 2: Reverse the second half starting from the middle
        let secondHalfStart = this.ReverseLinkedList(midNode);

        let firstHalf = this.head;
        let secondHalf = secondHalfStart;
        let isPalin = true;

        // Step 3: Compare the first half and reversed second half node by node
        while (secondHalf) {
            if (firstHalf.val !== secondHalf.val) {
                isPalin = false; // Mismatch found → not a palindrome
                break;
            }
            firstHalf = firstHalf.next;
            secondHalf = secondHalf.next;
        }

        // Step 4: Restore the second half to original
        this.ReverseLinkedList(secondHalfStart);

        return isPalin; // All matched → list is a palindrome
    }

}

// Example usage:
const linkedList = new LinkedList();
linkedList.addAtTail(1);
linkedList.addAtTail(2);
linkedList.addAtTail(3);
linkedList.addAtTail(4);
linkedList.addAtTail(5);
linkedList.removeNthFromEnd(2);

// linkedList.addAtTail(7);
// linkedList.addAtTail(7);
// linkedList.addAtTail(7);
// linkedList.addAtTail(7);
// linkedList.deleteByValue(2);

// let prev = null;
// let current = linkedList.head;
// const val = 6;
// while (current) {
//     if (current.val === val) {
//         prev.next = current.next;
//         current = prev.next;
//     } else {
//         prev = current;
//         current = current.next;
//     }
// }

// console.log(linkedList.findSize());
console.log(linkedList.convertToArray());