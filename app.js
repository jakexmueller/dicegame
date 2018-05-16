"use strict"

//DICE GAME
// RULES: Each player rolls all dice. If any outcomes are the same, those dice are removed. The first player to remove all dice wins.


let remainingDice = [4, 6, 8, 10, 12, 20];


let numberOfRolls=0
function runGame () {

	let originalRolls = rollDice(remainingDice);
	numberOfRolls=numberOfRolls+1;
	console.log('roll', numberOfRolls);
	console.log('You rolled:', originalRolls);
	let stageOne = getToNextSet (originalRolls);
	
}

function getToNextSet(firstRoundOutcomes){
	
	for (let i = 0; i < firstRoundOutcomes.length; i++){
		for (let j = i+1; j < firstRoundOutcomes.length; j++) {
			if (firstRoundOutcomes[i] === firstRoundOutcomes[j]){
				remainingDice.splice(j, 1);
				remainingDice.splice(i, 1);
				
				let match = firstRoundOutcomes.splice(j, 1);
				match = firstRoundOutcomes.splice(i, 1);
				console.log(match, 'is a match');
			}	
		}	
	}
	if (firstRoundOutcomes != 0){
		console.log('your non-matches', firstRoundOutcomes);
	}
	
	if (remainingDice !=0){
	console.log('Available Dice', remainingDice, 'Click "Roll!" again');
	}
	else {
	alert('GAME COMPLETE! It took you' + ' ' + numberOfRolls + ' ' + 'rolls!')
	}	
	
	return firstRoundOutcomes;	
}


function rollDice (diceArray) {
	let outcomeArray = [];
		for (let i = 0; i < diceArray.length; i++){
			let randomOutcome = Math.floor(Math.random() * diceArray[i]) + 1;
				outcomeArray.push(randomOutcome);	
		}
	return outcomeArray;
}




	


















