//imports express and bodyParser
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//allows you to access files from client/public via http
app.use(express.static('client/public'));
//adds middleware which only parses json
app.use(bodyParser.json({type: 'application/json'}));

//sends index.html if only the domain is passed
app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './client/views'})
})

//sends feed.html if the suffix '/feed' is passed after the domain
app.get('/feed', function(req, res) {
    res.sendFile('feed.html', {root: './client/views'})
})
//---------------------------------------------------------------------------------------------------
//Feed Item

//imports feedController.js
let feedController = require('./controller/feedController');

//adds api methods GET and POST using the api
app.route('/api/feedItems')
    .get(feedController.getFeedItems)
    .post(feedController.saveFeedItem);

//adds api methods GET, DELETE, PATCH, PUT using the api
app.route('/api/feedItems/:feedItemId')
    .get(feedController.getFeedItem)
    .delete(feedController.deleteFeedItem)
    .patch(feedController.updateFeedItem)
    .put(feedController.updateFeedItem);
//---------------------------------------------------------------------------------------------------
//Player

//imports playerController
let playerController = require('./controller/playerController');

//adds api methods GET and POST using the api
app.route('/api/players')
    .get(playerController.getPlayers)
    .post(playerController.saveplayer);

//adds api methods GET, DELETE, PATCH, PUT using the api
app.route('/api/players/:playerId')
    .get(playerController.getPlayer)
    .delete(playerController.deleteplayer)
    .patch(playerController.updateplayer)
    .put(playerController.updateplayer);

//listens for if port 1337 is active then it prints
app.listen(5000, () => console.log('Listening on port 1337.'))