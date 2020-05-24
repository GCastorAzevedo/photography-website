function zoomIn(photograph) {
  document.getElementById(`modal-${photograph}`).style.display = "block";
}

function zoomOut(photograph) {
  document.getElementById(`modal-${photograph}`).style.display = "none";
}

function showOverlay(photograph) {
  document.getElementById(`overlay-${photograph}`).style.opacity = 0.75;
}

/* export function showOverlay(photograph) {
  alert("aaa");
  document.getElementById(`overlay-${photograph}`).style.opacity = 0.75;
}

// then, on other scripts: import zoomIn from utils
*/
