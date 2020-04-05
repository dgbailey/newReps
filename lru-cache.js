// class LinkedList {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
//     insert(value){
//         let newNode = LinkedList(value);
//         this.next = newNode;
//     }
// }

function LinkedList(value) {
	this.value = value;
	this.next = null;
}

//every function comes with .prototype pointing to constructor
//updating prototype as such preserves the constructor function instead of pointing to a completetly new object
LinkedList.prototype.addValue = function(value) {
	let newNode = new LinkedList(value);
	this.next = newNode;
};

//lru cache: prioritize access for most frequently used items
//forget resizing for now

function lruCache(size) {
	this.dataArr = Array.from(Array(size)).map((v) => new LinkedList(null));
	this.size = size;
	this.load = 0;
	this.loadFactor = this.load / this.size;
}

lruCache.prototype = {
	constructor: lruCache.prototype.constructor,
	_hashValue(value) {
		let hash = value.length % this.size;
		return hash;
	},
	_computeLoadFactor() {
		this.load++;
		this.loadFactor = this.load / this.size;
	},
	insertValue(nonHashedValue) {
		let hashedValue = this._hashValue(nonHashedValue);
		//currently inserts duplicate values
		let [ hasHashCollision, result ] = this._hasCollision(hashedValue);
		if (!hasHashCollision) {
			this.dataArr[hashedValue].value = nonHashedValue;
		} else {
			result.next = new LinkedList(nonHashedValue);
		}
		this._computeLoadFactor();
	},
	_hasCollision(hashedValue) {
		//returns [false,null] on no collision or [true,lastNonNullLink]
		if (this.dataArr[hashedValue].value !== null) {
			let head = this.dataArr[hashedValue];
			while (head.next !== null) {
				head = head.next;
			}
			return [ true, head ];
		}
		return [ false, null ];
	},
	getValue(value) {
		let hash = this._hashValue(value);
		return this._searchList(hash, value);
	},
	_searchList(hashedValue, value) {
		//returns desired value and reorders linked list
		if (this.dataArr[hashedValue].value === value) {
			return this.dataArr[hashedValue];
		} else {
			let head = this.dataArr[hashedValue];
			let current = head;
			while (current.next) {
				if (current.next.value === value) {
					let temp = current;
					let newHead = current.next;
					temp.next = temp.next.next;
					newHead.next = head;
					this.dataArr[hashedValue] = newHead;
					return newHead;
				}
				current = current.next;
			}
			return false;
		}
	}
};

// let myCache = new lruCache(10);

// myCache.insertValue('monday');
// myCache.insertValue('tuesday');
// myCache.insertValue('sunday');
// myCache.insertValue('friday');
// let g = myCache.getValue('friday');
// console.log(g);
// let f = myCache.getValue('sunday');
// console.log(myCache.__proto__);

//things we missed in this implementation
//1. cache size is strictly enforced
//2. Assuming we have a low collision rate as a constraint
//3. Eviction policies
//4. A single linked List and a single hashmap
//the above implementation really supports collisions by having multiple linked lists that can reorder themselves
//5. A DLL would be much more convenient than a SLL

function dLL(node) {
	this.head = node;
	this.tail = node;
}

function dLLNode(value) {
	this.value = value;
	this.next = null;
	this.prev = null;
}

function lruV2(size) {
	this.dataArr = Array.from(Array(size)).map((v) => null);
	this.list = null;
	this.size = size; //specifically for hashing
	this.capacity = 0; //fixed length of linked list
}

lruV2.prototype = {
	constructor: lruV2.prototype.constructor,
	_hashValue(value) {
		return value.length % this.size;
	},
	get(value) {
		let hashedValue = this._hashValue(value);
		console.log(hashedValue);
		let cacheHit = this.dataArr[hashedValue];

		if (!cacheHit) {
			let newNode = new dLLNode(value);
			if (this.capacity === 0) {
				this.list = new dLL(newNode);
			} else if (this.capacity !== this.size) {
				this.list.tail.next = newNode;
				newNode.prev = this.list.tail;
				this.list.tail = this.list.tail.next;
			} else {
				//eviction policy
				this.list.tail.prev.next = newNode;
				this.list.tail = newNode;
			}
			this.capacity++;
			this.dataArr[hashedValue] = newNode;
			return newNode;
		} else if (cacheHit) {
			//reorder cacheHits neighbors
			let myPreviousNeighbor = cacheHit.prev;
			let myNextNeighbor = cacheHit.next;

			myPreviousNeighbor.next = myNextNeighbor;
			if (!myNextNeighbor) {
				//if replacing tail
				this.list.tail = myPreviousNeighbor;
			}
			//move cachehit to front of list
			cacheHit.next = this.list.head;
			cacheHit.prev = null;
			this.list.head = cacheHit;
			return cacheHit;
		}
	}
};

//insert
//eviction seems to be passing tests
//cachehits are passing tests
//lruv2 is not resilient to collisions
let myCache = new lruV2(10);
console.log(myCache.get('s'));
console.log(myCache.get('nnnnuunnuu'));
console.log(myCache.get('asdbeth'));
console.log(myCache.get('zzzzzzzz'));
console.log(myCache.get('ttttttttt'));
console.log(myCache.get('ididandnsntnesnt'));
console.log(myCache.list);
