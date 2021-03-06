

$( document ).ready(function() {
    
	let player1 = "X";
	let player2 = "O";
	let tie = "It's A Tie!";
	let currentTurn = 1;
	let movesMade = 0;


	let square = $(".square");
	let winnerContainer = $(".winner");
	let reset = $(".reset");

	square.on('click', function(e){
		if(event.target.innerHTML == ""){


			movesMade += 1;

			if(currentTurn == 1){
				event.target.innerHTML = player1;
				event.target.style.color = "red";
				currentTurn++;
			}else {
				event.target.innerHTML = player2;
				event.target.style.color = "black";
				currentTurn--;
			}

			if(checkForWinner()){
				let theWinner = currentTurn == 1 ? player2 : player1;
				declareWinner(theWinner);
			}
			else
			{
				if(movesMade == 9){
					declareWinner(tie);
				}
			}
		}
	});

	reset.on('click', function(e){
		let moves = Array.prototype.slice.call($(".square"));
		moves.map((m) => {
			m.innerHTML = "";
			});
		winnerContainer.html('');
		winnerContainer.css('display', "none");
		currentTurn = 1;
		movesMade = 0;
	});

	function checkForWinner(){
		if(movesMade > 4){
			let moves = Array.prototype.slice.call($(".square"));
			let results = moves.map(function(square){
				return square.innerHTML;
			});

			let winningCombos = [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
				[0, 4, 8],
				[2, 4, 6]
			];

			return winningCombos.find(function(combo){
				if(results[combo[0]] != "" && results[combo[1]] != "" && results[combo[2]] != "" && results[combo[0]] == results[combo[1]] && results[combo[1]] == results[combo[2]]) {
					return true;
				} else {
					return false;
				}
			})
		}
	}


	function declareWinner(winner){
		winnerContainer.css('display', 'block');
		reset.css('display', 'block');
		if(winner == tie){
			winnerContainer.html(tie);
		}else{
			winner = winner == player1 ? "Player 1" : "Player 2"
			winnerContainer.html(winner + " Wins!");
		}
	}

});



