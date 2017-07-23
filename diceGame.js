'use strict'

	/*(var setZero = 0
	function getPlayerInfo(){
		if(playerOneArray === playerOneArray){
			var playerTwoArray = playerOneArray;
		}
		
		var playerOneArray = [];
		var playerTwoArray = [];
		var firstname = prompt("please enter first name here.");
		playerOneArray.push(firstname);
		var lastName = prompt("Now enter your last name.");
		playerOneArray.push(lastName);
		setZero += 1;
		
			if(setZero === 1 || setZero === 2){
				setPlayerInfo(rollRandomDie, playerOneArray, playerTwoArray);
			}
	}*/

	function getPlayerOneInfo(){
		
		var playerOneArray = [];
		var firstname = prompt("player one enter first name here.");
		playerOneArray.push(firstname);
		//var lastName = prompt("Now enter your last name.");
		//playerOneArray.push(lastName);
		return playerOneArray;
		
	}

	function getPlayerTwoInfo(){
		
		var playerTwoArray = [];
		var firstname = prompt("player two enter first name here.");
		playerTwoArray.push(firstname);
		//var lastName = prompt("Now enter your last name.");
		//playerTwoArray.push(lastName);
		return playerTwoArray;
		
	}

	function storePlayerInfo(playerOneArray, playerTwoArray){
		//var playerOneLastName = playerOneArray.pop();
		var playerOneFirstName = playerOneArray.pop();
		//var playerTwoLastName = playerTwoArray.pop();
		var playerTwoFirstName = playerTwoArray.pop();
		var players = [
			{
				playerFirstName: playerOneFirstName,
				//playerLastName: playerOneLastName,
				hand: 0,

			},
			{
				playerFirstName: playerTwoFirstName,
				//playerLastName: playerTwoLastName,
				hand: 0,


			},
			
		]
			return players;
	}

	function testDiceArray(){
		var diceArray = [4, 6, 8, 10, 12, 20];
		return diceArray;
	}

	function chooseRandomDie(diceArray){
		var randomDie = diceArray[Math.floor(Math.random() * diceArray.length)];
		return randomDie;
	}

	function getRolledRandomDiePlayerOne(randomDie, playersHand){
		var rollRandomDie = Math.round(Math.random() * randomDie);
			if(rollRandomDie !== 0){
				console.log(playersHand[0].playerFirstName + ": rolled the " + randomDie + " sided die and it landed on " + rollRandomDie + ".");
				return rollRandomDie;
			}
			else{
				getRolledRandomDiePlayerOne(randomDie, playersHand);
			}		
	}

	function getRolledRandomDiePlayerTwo(randomDie, playersHand){
		var rollRandomDie = Math.round(Math.random() * randomDie);
			if(rollRandomDie !== 0){
				console.log(playersHand[1].playerFirstName + ": rolled the " + randomDie + " sided die and it landed on " + rollRandomDie + ".");
				return rollRandomDie;
			}
			else{
				getRolledRandomDiePlayerTwo(randomDie, playersHand);
			}
	}

	function getPlayerOneNewHand(rollRandomDiePlayerOne, playersHand){
		var currentScore = playersHand[0].hand;
		var playerOneNewHand = rollRandomDiePlayerOne + currentScore;
			if ( playerOneNewHand > 31) {
				console.log(playersHand[0].playerFirstName + ' Your hand busted, you lose');
				document.getElementById('hideButtonHitOne').style.visibility = 'hidden';
			}
			else{
				playersHand[0].hand = playerOneNewHand;
			}
		return playerOneNewHand;
	}

	function getPlayerTwoNewHand(rollRandomDiePlayerTwo, playersHand){
		var currentScore = playersHand[1].hand;
		var playerTwoNewHand = rollRandomDiePlayerTwo + currentScore;
		playersHand[1].hand = playerTwoNewHand;
		if ( playerTwoNewHand > 31) {
				console.log(playersHand[1].playerFirstName + ' your hand busted, you lose');
				document.getElementById('hideButtonHitTwo').style.visibility = 'hidden';
			}
			else{
				playersHand[1].hand = playerTwoNewHand;
			}
		return playerTwoNewHand;
	}
/*
	function checkPlayerOneBust(playersHand){
		var checkBust = playersHand[0].hand;
			if (checkBust > 31) {
				console.log('Your hand busted, you lose');
			}
	}*/	

	/*function checkPlayerTwoBust(playersHand){
		var checkBust = playersHand[1].hand;
			if (checkBust > 31) {
				console.log('Your hand busted, you lose');

			}
	}
*/

		//CALLING FUNCTIONS

	var playersHand = callPlayerSetUp();

	function callRolledDieFunctionsPlayerOne(playersHand){
		var diceArray = testDiceArray();
		var randomDie = chooseRandomDie(diceArray);
		var rollRandomDiePlayerOne = getRolledRandomDiePlayerOne(randomDie, playersHand);
		getPlayerOneNewHand(rollRandomDiePlayerOne, playersHand);
		return rollRandomDiePlayerOne;
	}

	function callRolledDieFunctionsPlayerTwo(playersHand){
		var diceArray = testDiceArray();
		var randomDie = chooseRandomDie(diceArray);
		var rollRandomDiePlayerTwo = getRolledRandomDiePlayerTwo(randomDie, playersHand);
		getPlayerTwoNewHand(rollRandomDiePlayerTwo, playersHand);
		return rollRandomDiePlayerTwo;		
	}	

	function callPlayerSetUp(){
		var playerOneArray = getPlayerOneInfo();
		var playerTwoArray = getPlayerTwoInfo();
		var playersHand = storePlayerInfo(playerOneArray, playerTwoArray);
		console.log(playersHand[0].playerFirstName + ': is player one!');
		console.log(playersHand[1].playerFirstName + ': is player two!');
		return playersHand
	}

	function callPlayerOneScore(rollRandomDiePlayerOne, playersHand){
		var playerOneNewHand = getPlayerOneNewHand(rollRandomDiePlayerOne, playersHand);
		return playerOneNewHand;
	}

	function callPlayerTwoScore(rollRandomDiePlayerTwo, playersHand){
		var playerTwoNewHand = getPlayerTwoNewHand(rollRandomDiePlayerTwo, playersHand);
		return playerTwoNewHand;
	}
		//var randomDiePlayerOne = callRolledDieFunctionsPlayerOne();
		//var randomDiePlayerTwo = callRolledDieFunctionsPlayerTwo();
		//var playersHand = callPlayerSetUp();
		//callPlayerOneScore(randomDiePlayerOne, playersHand);
		//callPlayerTwoScore(randomDiePlayerTwo, playersHand);
		//console.log(playersHand[1].hand);*/

