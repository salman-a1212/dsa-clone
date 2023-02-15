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


    push(data) {


        let newNode = new Node(data)


        if (this.first) {

            let temp = this.first
            this.first = newNode
            this.first.next = temp

        }
        else{
            this.first = newNode
            this.last = newNode

        }

        return this.size++



    }





}




let stack = new Stack

stack.push("syed")
stack.push("mehdi")
stack.pull()
stack.push("raza")
stack.push("naqvi")



console.log(stack)