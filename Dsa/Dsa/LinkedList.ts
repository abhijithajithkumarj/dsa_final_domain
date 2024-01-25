class MyNode {
     data:number
     next: MyNode| null

     constructor(data:number){
          this.data=data
          this.next=null
     }

}

class LinkedList{

     private head: MyNode | null

     constructor(){
          this.head=null
     }


     inster(data:number){
          const newMyNode=new MyNode(data);
          if(this.head===null){
               this.head=newMyNode;
          }else{
               let current=this.head
               while(current.next!==null){
                    current=current.next;      
               }
               current.next=newMyNode
          }
     }

     insertAtHead(data:number){
          const newNode= new MyNode(data);
          newNode.next=this.head
          this.head=newNode

     }


     delete(data:number){
          if(this.head===null){
               return
          }
          if(this.head.data===data){
               this.head=this.head.next;
               return
          }
          let current =this.head;
          while(current.next!==null&& current.next.data!==data){
               current=current.next
          }
          if(current.next!==null){
               current.next=current.next.next
          }   
     }


     update(oldNumber:number,newNumber:number){


          let current=this.head;

          while(current !==null){
               if(current.data===oldNumber){
                    current.data=newNumber;
                    return
               }
               current=current.next;

          }
     }


     addValue(placeRealData:number,insertData:number){
          let current =this.head;
         while(current!==null){
          if(current.data===placeRealData){
               const newNode=new MyNode(insertData);
               newNode.next=current.next
               current.next=newNode
               return;
          }
          current=current.next
         }
     }



     display(){
          let current=this.head
          while(current!==null){
               console.log(current.data+'              ');
               current=current.next;
               
          }
     }

     reverseTheNode() {
          let prev: MyNode | null = null;
          let current: MyNode | null = this.head;
          let next: MyNode | null = null;
          while (current !== null) {
              next = current.next;
              current.next = prev;
              prev = current;
              current = next;
          }
      
          this.head = prev; 
     }


     deleteEvenNumber(){
          while(this.head!==null && this.head.data%2===0){
               this.head=this.head.next;

          }
          let current=this.head;
          while(current!==null && current.next!==null){

               if(current.next.data%2===0){
                    current.next=current.next.next;
               }else{
                    current=current.next
               }
          }
     }
      

}


const linkedList=new LinkedList();
linkedList.inster(34)
linkedList.inster(30)
linkedList.inster(34)
linkedList.inster(34)
linkedList.inster(34)
linkedList.inster(34)
linkedList.inster(34)
linkedList.inster(45)
linkedList.inster(34)
linkedList.inster(645)
linkedList.inster(445)
linkedList.inster(345)
linkedList.inster(545)
linkedList.inster(34)



linkedList.display()
linkedList.delete(45)
console.log("========================================================");

linkedList.display()

console.log("========================================================");
linkedList.delete(45)
linkedList.display()



console.log("========================================================");
linkedList.addValue(34,1000)
linkedList.display()


console.log("========================================================");
linkedList.reverseTheNode()
linkedList.display()


console.log("========================================================");
linkedList.deleteEvenNumber()
linkedList.display()




