const player = require('../model/player');
console.log('player controller running!')

const player1 = player.createPlayer('Bob', 20, 1.0, 'Builder');
const player2 = player.createPlayer('Mario', 20, 1.0, 'Obscenely Athletic health');
const player3 = player.createPlayer('Princess Peach', 1, 0.0, 'Gets captured every 5 minutes');

let players = [];

players.push(player1);
players.push(player2);
players.push(player3);

exports.getPlayers = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
	res.send(players);
}

exports.getPlayer = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
	res.send(players[req.params.playerId]);
}

exports.saveplayer = (req, res) => {
	let newplayer = player.createPlayer(req.body.name, req.body.health, req.body.strength, req.body.ability);
	players.push(newplayer);
	res.setHeader('Content-Type', 'application/json');
	res.send(players);
}

exports.deleteplayer = function(req, res) {
	players.splice(req.params.playerId, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(players);
}

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