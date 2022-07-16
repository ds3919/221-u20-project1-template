const feedItem = require('../model/feedItem');
console.log('controller running!');

//creates 3 default feedItems
const feedItem1 = feedItem.createFeedItem('Marist Swimming', "They won", 'https://goredfoxes.com/sports/mens-swimming-and-diving', '../images/buffalo shooting.jpg');
const feedItem2 = feedItem.createFeedItem('Florida man kills his wife for a donut', "Yes folks we are serious", "https://youtu.be/dQw4w9WgXcQ", '../images/balloons.jpg');
const feedItem3 = feedItem.createFeedItem('Florida man eats donuts in a garbage with his alligator', "Yes folks we are serious", "http://google.com", '../images/shrek.png');

let feedItems = [];

feedItems.push(feedItem1);
feedItems.push(feedItem2);
feedItems.push(feedItem3);

//returns all objects inside feedItems
exports.getFeedItems = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
	res.send(feedItems);
}

//adds a new object in feedItems using the aattributes of the object that is passed
exports.saveFeedItem = (req, res) => {
	let newFeedItem = feedItem.createFeedItem(req.body.title, req.body.body, req.body.linkUrl, req.body.imageUrl);
	feedItems.push(newFeedItem);
	res.setHeader('Content-Type', 'application/json');
	res.send(feedItems);
}

//returns a single object using the index to get the specific object inside feedItems
exports.getFeedItem = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
  	res.send(feedItems[req.params.feedItemId]);
}

//deletes an object using the index to splice feedItems right at the object
exports.deleteFeedItem = function(req, res) {
	console.log('deleting item');
	feedItems.splice(req.params.feedItemId, 1);
	console.log('deleted item');
	res.setHeader('Content-Type', 'application/json');
	res.send(feedItems);
}

//changes the attributes of a specific object depending on which attributes are passed, it changes for the object using its index to call from feedItems
exports.updateFeedItem = function(req, res) {
	// get the existing user from the array
	var updatedFeedItem = feedItems[req.params.feedItemId];

	// check to see what has been passed and update the local copy
	console.log(req.body.title);
	if(req.body.title)
		updatedFeedItem.title = req.body.title;
	if(req.body.body)
		updatedFeedItem.body = req.body.body;
	if(req.body.linkUrl)
		updatedFeedItem.linkUrl = req.body.linkUrl;
	if(req.body.imageUrl)
		updatedFeedItem.imageUrl = req.body.imageUrl;

	// save the local copy of the user back into the array
	feedItems[req.params.feedItemId] = updatedFeedItem;

	res.setHeader('Content-Type', 'application/json');
	res.send(feedItems[req.params.feedItemId]);
}