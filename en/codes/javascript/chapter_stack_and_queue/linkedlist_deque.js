/**
 * File: linkedlist_deque.js
 * Created Time: 2023-02-04
 * Author: Zhuo Qinyue (1403450829@qq.com)
 */

/* Double-linked list node */
class ListNode {
    prev; // Predecessor node reference (pointer)
    next; // Successor node reference (pointer)
    val; // Node value

    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

/* Double-ended queue class based on double-linked list */
class LinkedListDeque {
    #front; // Head node front
    #rear; // Tail node rear
    #queSize; // Length of the double-ended queue

    constructor() {
        this.#front = null;
        this.#rear = null;
        this.#queSize = 0;
    }

    /* Rear enqueue operation */
    pushLast(val) {
        const node = new ListNode(val);
        // If the list is empty, make front and rear both point to node
        if (this.#queSize === 0) {
            this.#front = node;
            this.#rear = node;
        } else {
            // Add node to the tail of the list
            this.#rear.next = node;
            node.prev = this.#rear;
            this.#rear = node; // Update tail node
        }
        this.#queSize++;
    }

    /* Front enqueue operation */
    pushFirst(val) {
        const node = new ListNode(val);
        // If the list is empty, make front and rear both point to node
        if (this.#queSize === 0) {
            this.#front = node;
            this.#rear = node;
        } else {
            // Add node to the head of the list
            this.#front.prev = node;
            node.next = this.#front;
            this.#front = node; // Update head node
        }
        this.#queSize++;
    }

    /* Rear dequeue operation */
    popLast() {
        if (this.#queSize === 0) {
            return null;
        }
        const value = this.#rear.val; // Storing tail node value
        // Remove tail node
        let temp = this.#rear.prev;
        if (temp !== null) {
            temp.next = null;
            this.#rear.prev = null;
        }
        this.#rear = temp; // Update tail node
        this.#queSize--;
        return value;
    }

    /* Front dequeue operation */
    popFirst() {
        if (this.#queSize === 0) {
            return null;
        }
        const value = this.#front.val; // Storing tail node value
        // Remove head node
        let temp = this.#front.next;
        if (temp !== null) {
            temp.prev = null;
            this.#front.next = null;
        }
        this.#front = temp; // Update head node
        this.#queSize--;
        return value;
    }

    /* Access rear element */
    peekLast() {
        return this.#queSize === 0 ? null : this.#rear.val;
    }

    /* Access front element */
    peekFirst() {
        return this.#queSize === 0 ? null : this.#front.val;
    }

    /* Get the length of the double-ended queue */
    size() {
        return this.#queSize;
    }

    /* Determine if the double-ended queue is empty */
    isEmpty() {
        return this.#queSize === 0;
    }

    /* Print double-ended queue */
    print() {
        const arr = [];
        let temp = this.#front;
        while (temp !== null) {
            arr.push(temp.val);
            temp = temp.next;
        }
        console.log('[' + arr.join(', ') + ']');
    }
}

/* Driver Code */
/* Initialize double-ended queue */
const linkedListDeque = new LinkedListDeque();
linkedListDeque.pushLast(3);
linkedListDeque.pushLast(2);
linkedListDeque.pushLast(5);
console.log('Double-ended linked list deque = ');
linkedListDeque.print();

/* Access element */
const peekFirst = linkedListDeque.peekFirst();
console.log('Front element peekFirst =' + peekFirst);
const peekLast = linkedListDeque.peekLast();
console.log('Back element peekLast =' + peekLast);

/* Element enqueue */
linkedListDeque.pushLast(4);
console.log('Element 4 enqueued at the tail, linkedListDeque = ');
linkedListDeque.print();
linkedListDeque.pushFirst(1);
console.log('Element 1 enqueued at the head, linkedListDeque = ');
linkedListDeque.print();

/* Element dequeue */
const popLast = linkedListDeque.popLast();
console.log('Tail dequeued element = ' + popLast + ', after tail deque = ');
linkedListDeque.print();
const popFirst = linkedListDeque.popFirst();
console.log('Head dequeued element = ' + popFirst + ', after head deque = ');
linkedListDeque.print();

/* Get the length of the double-ended queue */
const size = linkedListDeque.size();
console.log('Length of the double-ended queue size =' + size);

/* Determine if the double-ended queue is empty */
const isEmpty = linkedListDeque.isEmpty();
console.log('Is the double-ended queue empty =' + isEmpty);
