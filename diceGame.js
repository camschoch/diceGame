'use strict'

function startProgram(){

	function setFourSidedDie(){
		var fourSidedDie = [1, 2, 3, 4];
		var randomFourSidedDie = fourSidedDie[Math.floor(Math.random() * fourSidedDie.length)];
		return randomFourSidedDie;
	}

	function setSixSidedDie(){
		var sixSidedDie = [1, 2, 3, 4, 5, 6];
		var randomSixSidedDie = sixSidedDie[Math.floor(Math.random() * sixSidedDie.length)];
		return randomSixSidedDie;
	}

	function setEightSidedDie(){
		var eightSidedDie = [1, 2, 3, 4, 5, 6, 7, 8];
		var randomEightSidedDie = eightSidedDie[Math.floor(Math.random() * eightSidedDie.length)];
		return randomEightSidedDie;
	}

	function setTenSidedDie(){
		var tenSidedDie = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		var randomTenSidedDie = tenSidedDie[Math.floor(Math.random() * tenSidedDie.length)];
		return randomTenSidedDie;
	}

	function setTwelveSidedDie(){
		var twelveSidedDie = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
		var randomTwelveSidedDie = twelveSidedDie[Math.floor(Math.random() * twelveSidedDie.length)];
		return randomTwelveSidedDie;
	}

	function setTwentySidedDie(){
		var twentySidedDie = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
		var randomTwentySidedDie = twentySidedDie[Math.floor(Math.random() * twentySidedDie.length)];
		return randomTwentySidedDie;
	}


}

startProgram();