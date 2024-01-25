var MyNode = /** @class */ (function () {
    function MyNode(data) {
        this.data = data;
        this.next = null;
    }
    return MyNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    LinkedList.prototype.inster = function (data) {
        var newMyNode = new MyNode(data);
        if (this.head === null) {
            this.head = newMyNode;
        }
        else {
            var current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newMyNode;
        }
    };
    LinkedList.prototype.delete = function (data) {
        if (this.head === null) {
            return;
        }
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        var current = this.head;
        while (current.next !== null && current.next.data !== data) {
            current = current.next;
        }
        if (current.next !== null) {
            current.next = current.next.next;
        }
    };
    LinkedList.prototype.update = function (oldNumber, newNumber) {
        var current = this.head;
        while (current !== null) {
            if (current.data === oldNumber) {
                current.data = newNumber;
                return;
            }
            current = current.next;
        }
    };
    LinkedList.prototype.addValue = function (placeRealData, insertData) {
        var current = this.head;
        while (current !== null) {
            if (current.data === placeRealData) {
                var newNode = new MyNode(insertData);
                newNode.next = current.next;
                current.next = newNode;
                return;
            }
            current = current.next;
        }
    };
    LinkedList.prototype.display = function () {
        var current = this.head;
        while (current !== null) {
            console.log(current.data + '              ');
            current = current.next;
        }
    };
    LinkedList.prototype.reverseTheNode = function () {
        var prev = null;
        var current = this.head;
        var next = null;
        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    };
    // deleteEvenNum() {
    //      while (this.head !== null && this.head.data % 2 === 0) {
    //          this.head = this.head.next;
    //      }
    //      let current = this.head;
    //      while (current !== null && current.next !== null) {
    //          if (current.next.data % 2 === 0) {
    //              current.next = current.next.next;
    //          } else {
    //              current = current.next;
    //          }
    //      }
    // }
    LinkedList.prototype.deleteEvenNumber = function () {
        while (this.head !== null && this.head.data % 2 === 0) {
            this.head = this.head.next;
        }
        var current = this.head;
        while (current !== null && current.next !== null) {
            if (current.next.data % 2 === 0) {
                current.next = current.next.next;
            }
            else {
                current = current.next;
            }
        }
    };
    return LinkedList;
}());
var linkedList = new LinkedList();
linkedList.inster(34);
linkedList.inster(30);
linkedList.inster(34);
linkedList.inster(34);
linkedList.inster(34);
linkedList.inster(34);
linkedList.inster(34);
linkedList.inster(45);
linkedList.inster(34);
linkedList.inster(645);
linkedList.inster(445);
linkedList.inster(345);
linkedList.inster(545);
linkedList.inster(34);
linkedList.display();
linkedList.delete(45);
console.log("========================================================");
linkedList.display();
console.log("========================================================");
linkedList.delete(45);
linkedList.display();
console.log("========================================================");
linkedList.addValue(34, 1000);
linkedList.display();
console.log("========================================================");
linkedList.reverseTheNode();
linkedList.display();
console.log("========================================================");
linkedList.deleteEvenNumber();
linkedList.display();
