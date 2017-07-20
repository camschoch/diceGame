'use strict'

function startProgram(){

	function getPlayerInfo(){
		var testArray = []
		var firstname = prompt("please enter first name here.");
		testArray.push(firstname);
		var lastName = prompt("Now enter your last name.");
		testArray.push(lastName);
		return testArray
	}

	//function getPlayerTwoInfo(){}

	function testDiceArray(){
		var diceArray = [4, 6, 8, 10, 12, 20];
		return diceArray;
	}

	function chooseRandomDie(diceArray){
		var randomDie = diceArray[Math.floor(Math.random() * diceArray.length)];
		return randomDie;
	}

	function getRolledRandomDie(randomDie){
		var rollRandomDie = Math.round(Math.random() * randomDie);
			if(rollRandomDie !== 0){
				console.log(rollRandomDie);
				return rollRandomDie;
			}
		getRolledRandomDie(randomDie);
		
	}


	function setPlayerInfo(rollRandomDie, testArray){
		var players = [
			{
				"playerFirstName": testArray.pop([0]);
				"playerLastName": testArray.pop([1]);
			
			}
	}

	var diceArray = testDiceArray();
	var randomDie = chooseRandomDie(diceArray);
	var rollRandomDie = getRolledRandomDie(randomDie); 

}

startProgram();