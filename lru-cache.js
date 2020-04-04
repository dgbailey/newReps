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
}

lruCache.prototype = {
	...lruCache.prototype,
	_hashValue(value) {
		let hash = value.length % this.size;
		return hash;
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
		this.size++;
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

let myCache = new lruCache(10);

myCache.insertValue('monday');
myCache.insertValue('tuesday');
myCache.insertValue('sunday');
myCache.insertValue('friday');
let g = myCache.getValue('friday');
console.log(g);
let f = myCache.getValue('sunday');
console.log(f);
