window.addEventListener('load', () => {
    fetch('/api/feeditems').then((res) => {
        res.json().then((data) => {
            for(var i = 0; i < data.length; i++) {
                let item = data[i];
                document.getElementById('newsfeed').innerHTML += "<img class='feedImage' src='" + item.imageUrl+ "'>\n<p><a href='" + item.linkUrl + "'>" + item.title + "</a><br>" + item.body + "<br><hr></p><br>";
            }
        });
    });
});

document.getElementById('portal_button').addEventListener('click', () => {location='http://www.marist.edu'})