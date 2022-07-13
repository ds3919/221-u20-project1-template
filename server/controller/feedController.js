const feedItem = require('../model/feedItem');
console.log('controller running!');

const feedItem1 = feedItem.createFeedItem('Marist Swimming', "They won", 'https://goredfoxes.com/sports/mens-swimming-and-diving', '../images/buffalo shooting.jpg');
const feedItem2 = feedItem.createFeedItem('Florida man kills his wife for a donut', "Yes folks we are serious", "https://youtu.be/dQw4w9WgXcQ", '../images/balloons.jpg');
const feedItem3 = feedItem.createFeedItem('Florida man eats donuts in a garbage with his alligator', "Yes folks we are serious", "http://google.com", '../images/shrek.png');

let feedItems = [];

feedItems.push(feedItem1);
feedItems.push(feedItem2);
feedItems.push(feedItem3);

exports.getFeedItems = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
	res.send(feedItems);
}

exports.saveFeedItem = (req, res) => {
	let newFeedItem = feedItem.createFeedItem(req.body.title, req.body.body, req.body.linkUrl, req.body.imageUrl);
	feedItems.push(newFeedItem);
	res.setHeader('Content-Type', 'application/json');
	res.send(feedItems);
}

exports.getFeedItem = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
  res.send(feedItems[req.params.feedItemId]);
}

exports.deleteFeedItem = function(req, res) {
	feedItems.splice(req.params.feedItemId, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(feedItems);
}

exports.updateFeedItem = function(req, res) {
	var updatedFeedItem = feedItems[req.params.feedItemId];

	console.log(req.body.title);
	if(req.body.title)
		updatedFeedItem.title = req.body.title;
	if(req.body.body)
		updatedFeedItem.body = req.body.body;
	if(req.body.linkUrl)
		updatedFeedItem.linkUrl = req.body.linkUrl;
	if(req.body.imageUrl)
		updatedFeedItem.imageUrl = req.body.imageUrl;

	feedItems[req.params.feedItemId] = updatedFeedItem;

	res.setHeader('Content-Type', 'application/json');
	res.send(feedItems[req.params.feedItemId]);
}