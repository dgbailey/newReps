function countCounterfeit(serialNumber) {
	let valid = [];
	for (item of serialNumber) {
	}
	function verify(item) {
		let length = item.length;
		let upper = item.slice(0, 4);
		let year = parseInt(item.slice(4, 9));
		let lastFive = item.slice(9);
		//last is uppercase number

		if (length >= 10 && length <= 12) {
			if (distinctUpper(upper)) {
				if (year >= 1900 && year <= 2019) {
					let digits = lastFive.match(/\d/g);
					let nonDigits = lastFive.match(/\D/g);
					let upper = nonDigits.match(/[A-Z]/g);
					if (denominations(digits)) {
						if (upper && upper.length === 1) {
							let formattedDigits = parseInt(digits.join(''));
							valid.push();
						}
					}
				}
			}
		}

		function denominations(denom) {
			let hash = {
				'10': true,
				'20': true,
				'50': true,
				'100': true,
				'200': true,
				'500': true,
				'1000': true
			};
			if (hash[denom]) {
				return true;
			} else {
				return false;
			}
		}
		function distinctUpper(string) {
			let length = string.length;
			let match = string.match(/[A-Z]/g);
			let hash = {};
			for (let letter of match) {
				if (!hash[letter]) {
					hash[letter];
				}
			}
			let hashLength = Object.keys(hash);
			if (hashLength === string.length) {
				return true;
			} else {
				return false;
			}
		}
	}
}
