//checks if the page is loaded
window.addEventListener('load', () => {
    //gets the json that holds the object values of feedItems(see feedController.js)
    fetch('/api/feedItems').then((res) => {
        //turns the promise into a json
        res.json().then((data) => {
            //loops through the array of objects
            for(var i = 0; i < data.length; i++) {
                let item = data[i];
                //creats html to display feedItem in the correct format while also adding a delete button
                document.getElementById('newsfeed').innerHTML += "<img class='feedImage' src='" + item.imageUrl+ "'>\n<p><a href='" + item.linkUrl + "'>" + item.title + "</a><br>" + item.body + "<br><button class='delete' id='"+ i +"' onClick='delButton(this.id)'>Delete</button><br><hr></p><br>";
            }
            document.getElementById('newsfeed').innerHTML += "<p><label for='title'>Title:</label><input type='text' name='title' id='title'><br><br><label for='body'>Body:</label><input type='text' name='body' id='body'><br><br><label for='imageUrl'>Image URL:</label><input type='url' name='imageUrl' id='imageUrl'><br><br><label for='linkUrl'>Link:</label><input type='url' name='linkUrl' id='linkUrl'><br><br><button id='enter' onClick='formButton()'>Enter</button></p>";
        });
    });
});
//redirects user to marist.edu if the portal button is clicked
document.getElementById('portal_button').addEventListener('click', () => {location='http://www.marist.edu'});