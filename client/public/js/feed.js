function feedItem (title, body, linkUrl, imageUrl) {
    this.title = title;
    this.body = body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
}

const story1 = new feedItem('Marist Swimming', "They won", 'https://goredfoxes.com/sports/mens-swimming-and-diving', '../images/buffalo shooting.jpg');
const story2 = new feedItem('Florida man kills his wife for a donut', "Yes folks we are serious", "https://youtu.be/dQw4w9WgXcQ", '../images/balloons.jpg');
const story3 = new feedItem('Florida man eats donuts in a garbage with his alligator', "Yes folks we are serious", "http://google.com", '../images/shrek.png');

const currentStories = [story1, story2, story3];

function  displayItem() {
    for(var i = 0; i < currentStories.length; i++) {
        let item = currentStories[i];
        document.getElementById('newsfeed').innerHTML += "<img class='feedImage' src='" + item.imageUrl + "'>\n<p><a href='" + item.linkUrl + "'>" + item.title + "</a><br>" + item.body + "<br><hr></p><br>";
    }
}

window.addEventListener('load', displayItem);

document.getElementById('portal_button').addEventListener("click", () => {window.location = 'https://www.marist.edu/';});