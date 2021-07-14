// The node we'll use for the singly linked list
class SLLNode {
    constructor(val) {
        this.value = val; // Holds a value for this node
        this.next = null; // Points to the next node in the value
    }
}
// // Demonstration of creating two nodes
// var myNode = new SLLNode(10);
// var myNode2 = new SLLNode(20);

// console.log(myNode);
// // Connect the two nodes
// myNode.next = myNode2;
// console.log(myNode);

// The singly linked class itself
class SLL {
    constructor() {
        this.head = null; // Start with an empty list
    }

    // Add a node to the front of the list
    addNodeToFront(val) {
        var newNode = new SLLNode(val); // Create a new node
        // Long version
        if (this.head == null) { // If the list is empty
            this.head = newNode;
        } else { // If we have at least one node
            newNode.next = this.head; // Connect the new node to the list
            this.head = newNode; // Move the head of the list to the new node
        }
        return this; // Allows for chaining

        
        // // Short version
        // if (this.head != null) { // If there is at least one node
        //     newNode.next = this.head;
        // }
        // this.head = newNode;
        // return this;

        // // Even simpler version, suggested by Julian Sunn:
        // newNode.next = this.head;
        // this.head = newNode;
        // return this;
    }

    // Length of the list
    // Time: O(n) - traverse entire list
    // Space: O(1) - variables need same space (runner is a pointer - need same space; count takes same space) 
    length() {
        var runner = this.head; // Starts us off at the start of the list
        var count = 0; // Keeps track of the number of nodes we've found so far in our list
        // Traverse the list
        while (runner != null) {
            count++; // Node found - increment the count
            runner = runner.next; // Move the runner to the next node (or to null - end of the list)
        }
        return count;
    }

    // Add a node to the END of the list
    // Time: O(n) - loop through entire list
    // Space: O(1) - variables take same amount of space (runner is a pointer - need same space; newNode takes same space)  
    addNodeToBack(val) {
        var newNode = new SLLNode(val); // Create a new node
        if (this.head == null) { // Edge case: list is empty
            this.head = newNode;
            // Alternately, could type this.addNodeToFront(val);
        } else { // At least one node from the list from before
            var runner = this.head; // Starts us off at the start of the list
            // Move the runner to the last node in the list - NOT past it
            while (runner.next != null) {
                runner = runner.next;
            }
            runner.next = newNode; // Link end of list to the new node
        }
        return this;
    }
}

// Testing with one, then 2 nodes
var mySLL = new SLL();
console.log(mySLL.length());
mySLL.addNodeToBack(40);
console.log(mySLL.length());
// console.log(mySLL);
mySLL.addNodeToBack(30);
// console.log(mySLL);
console.log(mySLL.length());
mySLL.addNodeToBack(50);
console.log(mySLL.length());
console.log(mySLL.head);
console.log(mySLL.head.next);
console.log(mySLL.head.next.next);

// Random method
// Time: O(n) - loop through entire array
// Space: O(1) - variables take same amount of space (value for each)
function randomness(arr) {
    var something = arr[0];
    for (var k = 1; k < arr.length; k++) {
        if (arr[k] > something) {
            something = arr[k];
        }
    }
    return something;
}

/* Big O notation is used to determine the amount of time and space you need for a method or algorithm to run.  If the size
of the input affects the amount of time it takes, it'll take O(n) - or O(something with n) time.  If you create variables like
arrays and objects whose space will depend on the size of the input, that is O(n) space.  If the variables take the same amount
of space regardless of the size of the inputs, that's O(1), or constant, space.  Same idea with time - if the amount of time
doesn't depend on the inputs, that's O(1), or constant, time.
*/
