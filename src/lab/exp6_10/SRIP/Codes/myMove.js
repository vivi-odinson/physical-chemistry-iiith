
function myMove() {
  var elem = document.getElementById("animate");
  var pos = 500;
  var id = setInterval(frame, 9);
  function frame() {
    if (pos == 1) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.left = pos + "px";
      elem.style.right = pos + "px";
    }
  }
}

