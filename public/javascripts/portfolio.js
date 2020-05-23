export function zoomIn(photograph) {
  document.getElementById(`modal-${photograph}`).style.display = "block";
}

export function zoomOut(photograph) {
  document.getElementById(`modal-${photograph}`).style.display = "none";
}

export function showOverlay(photograph) {
  alert("aaa");
  document.getElementById(`overlay-${photograph}`).style.opacity = 0.75;
}
