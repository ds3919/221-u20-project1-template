function feedItem (title, body, linkUrl, imageUrl) {
    this.title = title;
    this.body = body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
}
console.log('model running!');

exports.createFeedItem = (title, body, linkUrl, imageUrl) => {
    return new feedItem(title, body, linkUrl, imageUrl);
}