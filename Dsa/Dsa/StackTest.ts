class StackNode {
  data: number;
  next: StackNode | null;

  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}
class Stack {
  private top: StackNode | null;

  constructor() {
    this.top = null;
  }

  push(data: number) {
    const newNode = new StackNode(data);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop(): number | null {
    if (this.top === null) {
      return null;
    }
    const poppedData = this.top.data;
    this.top = this.top.next;
    return poppedData;
  }


  isEmpty():boolean{
     return this.top===null
  }


  peek(): null | number{
     return this.top!==null ? this.top.data:null;
  }

}




const stack =new Stack()
stack.push(122)
stack.push(72)
stack.push(772)
stack.push(72)
stack.push(662)
stack.push(172)
stack.push(1262)

while (!stack.isEmpty()) {
     console.log(stack.pop());
 }
