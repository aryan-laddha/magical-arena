const assert = require('assert');
const Player = require('../src/player');

describe('Player functionality tests', function() {
    it('should not reduce health below zero', function() {
        const player1 = new Player('Test Player 3', 40, 6, 15);
        const player2 = new Player('Test Player 4', 10, 3, 5);
    
        player1.rollDice = () => 6; // Player 1 rolls a 6 for attack
        player2.rollDice = () => 1; // Player 2 rolls a 1 for defense
    
        // Perform the attack
        player1.attackOpponent(player2);
    
        // Ensure health does not go below zero
        assert.strictEqual(player2.health, 0, "Player 2's health should not fall below zero");
    });
    

    it('should not reduce health below zero', function() {
        const player1 = new Player('Test Player 3', 40, 6, 15);
        const player2 = new Player('Test Player 4', 10, 3, 5);

        player1.rollDice = () => 6; // Player 1 rolls a 6 for attack
        player2.rollDice = () => 1; // Player 2 rolls a 1 for defense

        // Perform the attack
        player1.attackOpponent(player2);

        // Ensure health does not go below zero
        assert.strictEqual(player2.health, 0, "Player 2's health should not fall below zero");
    });
});
