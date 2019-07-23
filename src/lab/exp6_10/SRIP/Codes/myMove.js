
function myMove() {
  var elem = document.getElementById("animate");
  var pos = 0;
  var id = setInterval(frame, 7);
  function frame() {
    if (pos == 100) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.left = pos + "px";
      elem.style.right = pos + "px";
    }
  }
}
