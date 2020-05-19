let start = 3;
let coins = [ 1, 3, 9, 5 ];
let energy = [ 1, 2, 1, 1 ];

function optimize(energyRemaining, houseIndex, coinTotal = 0) {
	if (energyRemaining === 0) {
		return coinTotal;
	}
	if (houseIndex === coins.length - 1) {
		//take coins
		return coinTotal + coins[houseIndex];
	}
	let baseEnergy = energyRemaining - 1;
	let takeCoins = coinTotal + coins[houseIndex];
	let takeEnergy = baseEnergy + energy[houseIndex];

	return Math.max(optimize(baseEnergy, houseIndex + 1, takeCoins), optimize(takeEnergy, houseIndex + 1, coinTotal));
}

console.log(optimize(start, 0, 0));

//    0,1,1                    2,1,0
//    /                        /   \
//                         1,2,3   3,2,0
//                         /   \
//                     0,3,12
//                     /
//                 return 12
// return 1
