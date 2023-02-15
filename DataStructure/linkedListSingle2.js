class Node {
    constructor(data) {
        this.value = data
        this.next = null


    }
}




class SingleLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }


    push(data) {
        let newNode = new Node(data)

        if (!this.head) {

            this.head = newNode
            this.tail = this.head


        } else {

            this.tail.next = newNode
            this.tail = newNode


        }


        this.length++
    }

    pop() {

        if (!this.head) return undefined
        let current = this.head
        let newTail = current

        while (current.next) {
            newTail = current
            current = current.next
        }


        this.tail = newTail
        this.tail.next = null
        this.length--

        if (this.length === 0) {
            this.head = null
            this.tail = null
        }

        return current

    }


    unshift(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        }
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }



    get(index) {
        if (index < 0 || index >= this.length) return null
        const counter = 0
        const current = this.head
        while (counter !== index) {
            current = current.next
            counter++
        }
        return current
    }





    set(index, val) {
        const foundNode = this.get(index)
        if (foundNode) {
            foundNode.value = val
            return true
        }
        return false
    }



}








let singleList = new SingleLinkedList()

singleList.push("value1")
singleList.push("value2")
singleList.push("value3")
singleList.push("value4")
singleList.push("value5")
// singleList.unshift("unshiftValue")
// singleList.pop()

singleList.set(0, "mehdi")

console.log(singleList)

