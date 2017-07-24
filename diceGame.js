'use strict'

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
		var rollRandomDie = Math.floor(Math.random() * randomDie);
		while(rollRandomDie === 0)
		{
			rollRandomDie = Math.floor(Math.random() * randomDie);
		}

		console.log(playersHand[0].playerFirstName + ": rolled the " + randomDie + " sided die and it landed on " + rollRandomDie + ".");
		return rollRandomDie;
					
	}

	function getRolledRandomDiePlayerTwo(randomDie, playersHand){
		var rollRandomDie = Math.floor(Math.random() * randomDie);
		while(rollRandomDie === 0)
		{
			rollRandomDie = Math.floor(Math.random() * randomDie);
		}
		
		console.log(playersHand[1].playerFirstName + ": rolled the " + randomDie + " sided die and it landed on " + rollRandomDie + ".");
		return rollRandomDie;
	}

	function getPlayerOneNewHand(rollRandomDiePlayerOne, playersHand){
		var currentScore = playersHand[0].hand;
		var playerOneNewHand = rollRandomDiePlayerOne + currentScore;
		playersHand[0].hand = playerOneNewHand;
			/*if ( playerOneNewHand > 31) {
				console.log(playersHand[0].playerFirstName + ': your hand busted, you lose');
				
				document.getElementById('hideButtonHitOne').style.visibility = 'hidden';
				document.getElementById('hideButtonPlayerOneStand').style.visibility = 'hidden';
				document.getElementById('hideButtonHitTwo').style.visibility = 'hidden';
				document.getElementById('hideButtonPlayerTwoStand').style.visibility = 'hidden';
			}
			else{
				playersHand[0].hand = playerOneNewHand;
			}*/
		return playerOneNewHand;
	}

	function getPlayerTwoNewHand(rollRandomDiePlayerTwo, playersHand){
		var currentScore = playersHand[1].hand;
		var playerTwoNewHand = rollRandomDiePlayerTwo + currentScore;
		playersHand[1].hand = playerTwoNewHand;
		//if ( playerTwoNewHand > 31) {
		//		console.log(playersHand[1].playerFirstName + ': your hand busted, you lose');
				
		//		document.getElementById('hideButtonHitTwo').style.visibility = 'hidden';
		//		document.getElementById('hideButtonPlayerTwoStand').style.visibility = 'hidden';
		//		document.getElementById('hideButtonHitOne').style.visibility = 'hidden';
		//		document.getElementById('hideButtonPlayerOneStand').style.visibility = 'hidden';
		//	}
		//	else{
		//		playersHand[1].hand = playerTwoNewHand;
		//	}
		return playerTwoNewHand;
	}

	function getPlayerOneStand(playersHand){
		console.log(playersHand[0].playerFirstName + ': you stand with a hand of ' + playersHand[0].hand);
		compareHands(playersHand);
		document.getElementById('hideButtonHitOne').style.visibility = 'hidden';
		document.getElementById('hideButtonPlayerOneStand').style.visibility = 'hidden';
	}

	function getPlayerTwoStand(playersHand){
		console.log(playersHand[1].playerFirstName + ': you stand with a hand of ' + playersHand[1].hand);
		compareHands(playersHand);
		document.getElementById('hideButtonHitTwo').style.visibility = 'hidden';
		document.getElementById('hideButtonPlayerTwoStand').style.visibility = 'hidden';
	}

	function declareBustWinPlayerOne(rollRandomDiePlayerOne, playersHand){
		var currentScore = playersHand[0].hand;
			if ( currentScore > 31) {
				console.log(playersHand[1].playerFirstName + ': You Win!');
			}
	}

	function declareBustWinPlayerTwo(rollRandomDiePlayerTwo, playersHand){
		var currentScore = playersHand[1].hand;
			if ( currentScore > 31) {
				console.log(playersHand[0].playerFirstName + ': You Win!');
			}
	}

	function checkBustPlayerOne(playersHand){
		var playerOneNewHand = playersHand[0].hand;
			if ( playerOneNewHand > 31) {
				console.log(playersHand[0].playerFirstName + ': your hand busted, you lose');
				
				document.getElementById('hideButtonHitOne').style.visibility = 'hidden';
				document.getElementById('hideButtonPlayerOneStand').style.visibility = 'hidden';
				document.getElementById('hideButtonHitTwo').style.visibility = 'hidden';
				document.getElementById('hideButtonPlayerTwoStand').style.visibility = 'hidden';
			}
	}

	function checkBustPlayerTwo(playersHand){
		var playerTwoNewHand = playersHand[1].hand;
			if ( playerTwoNewHand > 31) {
				console.log(playersHand[1].playerFirstName + ': your hand busted, you lose');
				
				document.getElementById('hideButtonHitOne').style.visibility = 'hidden';
				document.getElementById('hideButtonPlayerOneStand').style.visibility = 'hidden';
				document.getElementById('hideButtonHitTwo').style.visibility = 'hidden';
				document.getElementById('hideButtonPlayerTwoStand').style.visibility = 'hidden';
			}
	}

	function compareHands(playersHand){
		if(playersHand[0].hand > playersHand[1].hand){
			console.log(playersHand[0].playerFirstName + ': you have a higher hand, You Win!');
			
		}

		else if(playersHand[1].hand > playersHand[0].hand){
			console.log(playersHand[1].playerFirstName + ": you have a higher hand, You Win!")
		}

		else if(playersHand[0].hand < playersHand[1].hand){
			console.log(playersHand[0].playerFirstName + ': you have a smaller hand, you lose.');
		}

		else if(playersHand[1].hand < playersHand[0].hand){
			console.log(playersHand[1].playerFirstName + ': you have a smaller hand, you lose.');
		}
	}


		//CALLING FUNCTIONS

	var playersHand = callPlayerSetUp();

	function callRolledDieFunctionsPlayerOne(playersHand){
		var diceArray = testDiceArray();
		var randomDie = chooseRandomDie(diceArray);
		var rollRandomDiePlayerOne = getRolledRandomDiePlayerOne(randomDie, playersHand);
		getPlayerOneNewHand(rollRandomDiePlayerOne, playersHand);
		console.log(playersHand[0].playerFirstName + ": you have a total of " + playersHand[0].hand);
		checkBustPlayerOne(playersHand);
		declareBustWinPlayerOne(rollRandomDiePlayerOne, playersHand);
		return rollRandomDiePlayerOne;
	}

	function callRolledDieFunctionsPlayerTwo(playersHand){
		var diceArray = testDiceArray();
		var randomDie = chooseRandomDie(diceArray);
		var rollRandomDiePlayerTwo = getRolledRandomDiePlayerTwo(randomDie, playersHand);
		getPlayerTwoNewHand(rollRandomDiePlayerTwo, playersHand);
		console.log(playersHand[1].playerFirstName + ": you have a total of " + playersHand[1].hand);
		checkBustPlayerTwo(playersHand);
		declareBustWinPlayerTwo(rollRandomDiePlayerTwo, playersHand);
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

	/*function callPlayerOneScore(rollRandomDiePlayerOne, playersHand){
		var playerOneNewHand = getPlayerOneNewHand(rollRandomDiePlayerOne, playersHand);
		return playerOneNewHand;
	}

	function callPlayerTwoScore(rollRandomDiePlayerTwo, playersHand){
		var playerTwoNewHand = getPlayerTwoNewHand(rollRandomDiePlayerTwo, playersHand);
		return playerTwoNewHand;
	}
		}
		}
*/
