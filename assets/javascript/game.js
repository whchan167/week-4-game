var wins = 0;
var losses = 0;
var score = 0;
var gemvalues = [0,0,0,0]

//generate a random number displayed in the main box for user to play:
	var randomnumber = Math.floor(Math.random()*101)+19;
	$("#randomnumber").html(randomnumber);

//create the for loop to add hidden set random number to each gem
for (var i=0; i < gemvalues.length; i++) {
	gemvalues[i]=Math.floor(Math.random()*12)+1;
}

function resetgame() {
	randomnumber = Math.floor(Math.random()*101)+19;
	$("#randomnumber").html(randomnumber);
	
	//create the for loop to add hidden random number again 
	for (var i=0; i < gemvalues.length; i++) {
	gemvalues[i]=Math.floor(Math.random()*12)+1;
	}
	score=0;
	$("#wins").html("wins: " + wins);
	$("#losses").html("losses: "+ losses);
};

function results() {
		if (score > randomnumber) {
		losses ++;
		alert ("Sorry! you lose. Try again!");
		resetgame();
		$("#losses").html("losses: " + losses);
		}
		else if (score === randomnumber) {
		wins ++;
		alert ("you win one game. Good work!");
		resetgame();
		$("#wins").html("wins: " + wins);
		}
	};


//generate the hidden value for each crystal 
$(document).ready(function() {
	//when click on each crystal, the hidden value will display
	$("#cry1").on("click", function() {
		//add first hidden value in gemvalue array to the score 
		score = score + gemvalues[0];
		results();
		$("#box2").html(score);
		console.log(gemvalues[0]);
		console.log(score);
		});

	$("#cry2").on("click", function() {
		//add second hidden value in gemvalue array to the score
		score = score + gemvalues[1];
		results();
		$("#box2").html(score);
		});

	$("#cry3").on("click", function() {
		//add third hidden value in gemvalue array to the score
		score = score + gemvalues[2];
		results();
		$("#box2").html(score);
		});

	$("#cry4").on("click", function() {
		//add fourth hidden value in gemvalue array to the score
		score = score + gemvalues[3];
		results();
		$("#box2").html(score);
		});

		resetgame();

});