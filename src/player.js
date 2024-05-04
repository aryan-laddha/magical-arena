class Player {
    constructor(name, health, strength, attack) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.attack = attack;
    }

    rollDice() {
        return 1 + Math.floor(Math.random() * 6);
    }
    attackOpponent(defender) {
        const attackRoll = this.rollDice();
        const defendRoll = defender.rollDice();
        const attackDamage = this.attack * attackRoll;
        const defenseDamage = defender.strength * defendRoll;
        const damageInflicted = Math.max(0, attackDamage - defenseDamage);
    
        // Ensure health does not go below zero
        defender.health = Math.max(0, defender.health - damageInflicted);
    
        console.log(`${this.name} attacks with a roll of ${attackRoll} causing ${attackDamage} damage. ${defender.name} defends with a roll of ${defendRoll} preventing ${defenseDamage} damage. ${defender.name} takes ${damageInflicted} damage and is down to ${defender.health} health.`);
    }
    
}

module.exports = Player;
