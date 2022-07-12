const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('client/public'));
app.use(bodyParser.json({type: 'application/json'}));

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './client/views'})
})

app.get('/feed', function(req, res) {
    res.sendFile('feed.html', {root: './client/views'})
})
//---------------------------------------------------------------------------------------------------
//Feed Item
let feedController = require('./controller/feedController');

app.route('/api/feedItems')
    .get(feedController.getFeedItems)
    .post(feedController.saveFeedItem);

app.route('/api/feedItems/:feedItemId')
    .get(feedController.getFeedItem)
    .delete(feedController.deleteFeedItem)
    .patch(feedController.updateFeedItem)
    .put(feedController.updateFeedItem);
//---------------------------------------------------------------------------------------------------
//Player
let playerController = require('./controller/playerController');

app.route('/api/players')
    .get(playerController.getPlayers)
    .post(playerController.saveplayer);

app.route('/api/players/:playerId')
    .get(playerController.getPlayer)
    .delete(playerController.deleteplayer)
    .patch(playerController.updateplayer)
    .put(playerController.updateplayer);

app.listen(1337, () => console.log('Listening on port 1337.'))