let el = document.addEventListener('keypress', function(e) {
  if(e.keyCode == 32) {
    goToLocation('/feed');
  }
});

document.getElementById('fade_text').addEventListener("click", () => {goToLocation('/feed');});