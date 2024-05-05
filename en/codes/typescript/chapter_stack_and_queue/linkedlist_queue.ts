/**
 * File: linkedlist_queue.ts
 * Created Time: 2022-12-19
 * Author: S-N-O-R-L-A-X (snorlax.xu@outlook.com)
 */

import { ListNode } from '../modules/ListNode';

/* Queue class based on linked list */
class LinkedListQueue {
    private front: ListNode | null; // Head node front
    private rear: ListNode | null; // Tail node rear
    private queSize: number = 0;

    constructor() {
        this.front = null;
        this.rear = null;
    }

    /* Get the length of the queue */
    get size(): number {
        return this.queSize;
    }

    /* Determine if the queue is empty */
    isEmpty(): boolean {
        return this.size === 0;
    }

    /* Enqueue */
    push(num: number): void {
        // Add num behind the tail node
        const node = new ListNode(num);
        // If the queue is empty, make the head and tail nodes both point to that node
        if (!this.front) {
            this.front = node;
            this.rear = node;
            // If the queue is not empty, add that node behind the tail node
        } else {
            this.rear!.next = node;
            this.rear = node;
        }
        this.queSize++;
    }

    /* Dequeue */
    pop(): number {
        const num = this.peek();
        if (!this.front) throw new Error('Queue is empty');
        // Remove head node
        this.front = this.front.next;
        this.queSize--;
        return num;
    }

    /* Access front element */
    peek(): number {
        if (this.size === 0) throw new Error('Queue is empty');
        return this.front!.val;
    }

    /* Convert the linked list to Array and return */
    toArray(): number[] {
        let node = this.front;
        const res = new Array<number>(this.size);
        for (let i = 0; i < res.length; i++) {
            res[i] = node!.val;
            node = node!.next;
        }
        return res;
    }
}

/* Driver Code */
/* Initialize queue */
const queue = new LinkedListQueue();

/* Element enqueue */
queue.push(1);
queue.push(3);
queue.push(2);
queue.push(5);
queue.push(4);
console.log('Queue queue =' + queue.toArray());

/* Access front element */
const peek = queue.peek();
console.log('Front element peek =' + peek);

/* Element dequeue */
const pop = queue.pop();
console.log('Element dequeued, pop = ' + pop + ', after queue = ' + queue.toArray());

/* Get the length of the queue */
const size = queue.size;
console.log('Length of the queue size =' + size);

/* Determine if the queue is empty */
const isEmpty = queue.isEmpty();
console.log('Is the queue empty =' + isEmpty);

export {};
