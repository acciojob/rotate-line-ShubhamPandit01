//your JS code here. If required.

let angle = 0;
let line = document.getElementById("line");

function rotateLine() {
  angle += 2;
  line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
}
setInterval(rotateLine, 20);
