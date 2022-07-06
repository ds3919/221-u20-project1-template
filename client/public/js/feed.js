function feedItem (title, body, linkUrl, imageUrl) {
    this.title = title;
    this.body = body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
  }
  
  let story1 = feedItem('Shooting in Buffallo', "people killed", 'https://www.npr.org/2022/06/16/1105776617/buffalo-shooting-suspect-says-his-motive-was-to-prevent-eliminating-the-white-ra', 'https://www.google.com/search?q=buffalo+shooting&rlz=1C1GCEA_enUS824US824&tbm=isch&source=iu&ictx=1&vet=1&fir=-fQnbBIGtAd5mM%252CKEed91-9LpXFmM%252C%252Fg%252F11szd9w4kt&usg=AI4_-kRIkBqdkEZsF9N5IJIdItcxT2AfSg&sa=X&ved=2ahUKEwjI5qLBs-T4AhV8EGIAHWaAARQQ_B16BAgrEAI#imgrc=-fQnbBIGtAd5mM');
  let story2 = feedItem();
  let story3 = feedItem();
  
  const currentStories = [story1, story2, story3];

  let newsfeed = document.getElementById('newsfeed').innerHTML;

  function displayItem(item) {
    newsfeed += item;
  }

  document.getElementById('newsfeed').onload(currentStories.map(displayItem));