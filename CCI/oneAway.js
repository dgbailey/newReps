function oneAway(string, goal) {
	//replace, insert, delete character
	//pale -> pie
	//two tasks here
	//when is insert appropriate
	//when is delete appropriate
	//when is replace appropriate

	//one edit allowed per string

	//start atomic
	//string = 'a'
	//goal = 'a'
	//moves = 0

	//string = 'b'
	//goal = 'a';
	//moves = 1
	//delete + insert
	//replace

	//string 'aa'
	//goal 'bb'
	//relpace + insert + delete

	//ab
	//bb
	//replace
	//delete + insert

	//aabb
	//bbaa

	//edge case
	//''
	//bc
	//not possible

	//same length off by two or more (not within our constraint)
	//different length
	//length diff gt 1 impossible
	//off by two

	//so front to back comparison of strings
	let countA = 0;
	let countB = 0;
	let mimatch = 0;

	//goal could be much shorteror larger
	//does our operation matter?
	//only three edits total between both strings.  None of the same type
	while (countA < string.length && countB < goal.length) {
		if (string[countA] === goal[countB]) {
			countA++;
			countB++;
		} else if (string[countA] !== goal[countB]) {
			countB++;
		}
	}
}

//couldn't solve this initially
//started trying to find max difference that out operations could account for.  This did not generalize well.
