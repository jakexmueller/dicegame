"use strict"

//DICE GAME
// RULES: Each player rolls all dice. If any outcomes are the same, those dice are removed. The first player to remove all dice wins. If a three of a kind is rolled, the turn is skipped.

// Create a rollDice function
// Create arrays fo		let randomOutcomes = Math.floor(Math.random() * diceArray[i]) + 1;
// each die
// Create counter/sum adder to total number
// Make prompt for players to enter names
// 




//document.getElementById("app.js").onclick = function() {getToSecondSet()}



let remainingDice = [4, 6, 8, 10, 12, 20];
let indeciesToRemove = [1, 2, 2, 3];

// [4, 10, 12, 20]

// [2, 9, 4, 2]


function runGame () {
	//let firstArray = [4, 6, 8, 10, 12, 20];

	let originalRolls = rollDice(remainingDice);
	console.log('You rolled:', originalRolls);
	let stageOne = getToNextSet (originalRolls);
	/* console.log('stageOne', stageOne);
		if (stageOne.length === 6){
			console.log(stageOne + " " + "Roll Again!");
		}
		else if (stageOne.length < 6){
			console.log(stageOne + " " + "Nice!");
		}
		return stageOne;*/
}

function getToNextSet(firstRoundOutcomes){
	//firstRoundOutcomes = [1, 1, 19, 12, 1, 1];
	for (let i = 0; i < firstRoundOutcomes.length; i++){
		for (let j = i+1; j < firstRoundOutcomes.length; j++) {
			if (firstRoundOutcomes[i] === firstRoundOutcomes[j]){
				// remainingDice[i] = -1;
				
				// indeciesToRemove.push(i);
				// indeciesToRemove.push(j);
				
				remainingDice.splice(j, 1);
				remainingDice.splice(i, 1);
				
				let match = firstRoundOutcomes.splice(j, 1);
				match = firstRoundOutcomes.splice(i, 1);
				console.log(match, 'is a match');
				console.log('your non-matches', firstRoundOutcomes, 'Click "Roll for round two!"');
				
			}	
		}	
	}
	
	console.log('Available Dice', remainingDice);
	
	//console.log(firstRoundOutcomes);
	return firstRoundOutcomes;	
}

/*function runStageTwo () {
		let stageTwo = getToFinalSet ()
		if (stageTwo.length === 4) {
			console.log(stageTwo + " " + "Roll Again!");
		}	
		else if (stageTwo.length < 4){
			console.log(stageTwo + " " + "Nice!");
		}
}

function getToFinalSet(){
	let secondArray = [];
	let secondRoundOutcome = rollDice(secondArray);		
		for (let i = 0; i < secondRoundOutcome.length; i++){
		for (let j = i+1; j < secondRoundOutcome.length; j++) {
			if (secondRoundOutcome[i] === secondRoundOutcome[j]){
				let finalArray = secondRoundOutcome.splice([i], [j])	
			} 
		}	
		}	
	return secondRoundOutcome;	
}
*/

function rollDice (diceArray) {
	let outcomeArray = [];
		for (let i = 0; i < diceArray.length; i++){
			let randomOutcome = Math.floor(Math.random() * diceArray[i]) + 1;
				outcomeArray.push(randomOutcome);	
		}
	return outcomeArray;
}


/*
function displayPairedDice (){
	let diceArray = []
	let newDiceSet = rollDice(diceArray)
		for (let i = 0; i < newDiceSet.length; i++){
		for (let j = i+1; j < newDiceSet.length; j++) {
			if (newDiceSet[i] === newDiceSet[j]){
				let secondArray = newDiceSet([i], [j])
			}	
		}	
		}
		console.log(newDiceSet);
}
*/



	


















