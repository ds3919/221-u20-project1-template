//redirects user to url/feed if space bar is clicked
let el = document.addEventListener('keypress', function(e) {
  //checks if key pressed is space
  if(e.keyCode == 32) {
    goToLocation('/feed');
  }
});
//redirects user to url/feed if fade_text is clicked
document.getElementById('fade_text').addEventListener("click", () => {goToLocation('/feed');});