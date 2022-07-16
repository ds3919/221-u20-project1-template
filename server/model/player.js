//constructer for making players
function player(name, health, strength, ability){
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.ability = ability;
}

console.log('player model running!');

//creates a function that is available to call from other files to make a new object
exports.createPlayer = (name, health, strength, ability) => {
    return new player(name, health, strength, ability);
};