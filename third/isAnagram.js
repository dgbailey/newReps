/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    //anagrams have the same frequency of letters
    //sort each and compare
    let g = s.split("").sort().join("")
    let p = t.split("").sort().join("")
   
   return g === p
    
 
};

//another solution

function isAnagram(s, t) {
	const map = {};
	s.split('').map(c => map[c] = map[c] ? map[c] + 1 : 1);
	t.split('').map(c => map[c] = map[c] ? map[c] - 1 : -1);
	return Object.keys(map).every(k => map[k] === 0);
}