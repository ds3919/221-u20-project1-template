const player = require('../model/player');
console.log('player controller running!')

//creates 3 default players
const player1 = player.createPlayer('Bob', 20, 1.0, 'Builder');
const player2 = player.createPlayer('Mario', 20, 1.0, 'Obscenely Athletic health');
const player3 = player.createPlayer('Princess Peach', 1, 0.0, 'Gets captured every 5 minutes');

let players = [];

players.push(player1);
players.push(player2);
players.push(player3);

//returns all objects inside players
exports.getPlayers = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
	res.send(players);
}

//adds a new object in players using the aattributes of the object that is passed
exports.getPlayer = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
	res.send(players[req.params.playerId]);
}

//returns a single object using the index to get the specific object inside players
exports.saveplayer = (req, res) => {
	let newplayer = player.createPlayer(req.body.name, req.body.health, req.body.strength, req.body.ability);
	players.push(newplayer);
	res.setHeader('Content-Type', 'application/json');
	res.send(players);
}

//deletes an object using the index to splice players right at the object
exports.deleteplayer = function(req, res) {
	players.splice(req.params.playerId, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(players);
}

//changes the attributes of a specific object depending on which attributes are passed, it changes for the object using its index to call from players
exports.updateplayer = function(req, res) {
	// get the existing user from the array
	var updatedPlayer = players[req.params.playerId];

	// check to see what has been passed and update the local copy
	console.log(req.body.name);
	if(req.body.name)
		updatedPlayer.name = req.body.name;
	if(req.body.health)
		updatedPlayer.health = req.body.health;
	if(req.body.strength)
		updatedPlayer.strength = req.body.strength;
	if(req.body.ability)
		updatedPlayer.ability = req.body.ability;

	// save the local copy of the user back into the array
	players[req.params.playerId] = updatedPlayer;

	res.setHeader('Content-Type', 'application/json');
	res.send(players[req.params.playerId]);
}