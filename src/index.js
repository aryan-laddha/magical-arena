const Player = require('./player');

const playerA = new Player('Player A', 50, 5, 10);
const playerB = new Player('Player B', 100, 10, 5);

function playGame(player1, player2) {
    let currentPlayer = player1.health < player2.health ? player1 : player2;
    let opponent = currentPlayer === player1 ? player2 : player1;

    while (player1.health > 0 && player2.health > 0) {
        currentPlayer.attackOpponent(opponent);

        // Immediately check for a draw condition after each attack
        if (player1.health <= 0 && player2.health <= 0) {
            console.log("The game ends in a draw! Both players have fallen.");
            return;
        }

        // Check if the current opponent has been defeated
        if (opponent.health <= 0) {
            console.log(`${opponent.name} has been defeated. ${currentPlayer.name} wins!`);
            return;
        }

        // Switch turns
        [currentPlayer, opponent] = [opponent, currentPlayer];
    }
}

playGame(playerA, playerB);
