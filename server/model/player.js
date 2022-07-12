function player(name, health, strength, ability){
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.ability = ability;
}

console.log('player model running!');

exports.createPlayer = (name, health, strength, ability) => {
    return new player(name, health, strength, ability);
};