


/*
 * Check ascii code for spacebar and call goToLocation in global to change URL
 */
function checkKeyPress(e) {
  if (e.keyCode == 32) {
    goToLocation('/feed');
  }
}
//253
let el = document.getElementId("fade_text").addEventListener("keypress", checkKeyPress(e));