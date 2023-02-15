class Node {
    constructor(data) {
        this.value = data
        this.next = null

    }
}


class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0

    }


    push(val) {

        let newNode = new Node(val)



        if (this.first) {
            let temp = this.first
            this.first = newNode
            this.first.next = temp
        } else {
            this.first = newNode
            this.last = newNode

        }

        this.size++


    }

    pop() {
        if (!this.first) return null

        var temp = this.first
        if (this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return temp.value
    }

}


let stack = new Stack


stack.push("syed")
stack.push("mehdi")
stack.push("raza")
stack.push("naqvi")

stack.pop()
stack.pop()

console.log(stack)