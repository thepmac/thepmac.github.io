function onHomeShelf(evt, text) {
  let tooltip = document.getElementById("HomeShelf");
  tooltip.innerHTML = text;
  tooltip.style.display = "block";
  tooltip.style.left = evt.pageX + 10 + 'px';
  tooltip.style.top = evt.pageY + 10 + 'px';
}

function offHomeShelf() {
  var tooltip = document.getElementById("HomeShelf");
  tooltip.style.display = "none";
}

function showTooltip(evt, text) {
  let tooltip = document.getElementById("HomeBench");
  tooltip.innerHTML = text;
  tooltip.style.display = "block";
  tooltip.style.left = evt.pageX + 10 + 'px';
  tooltip.style.top = evt.pageY + 10 + 'px';
}

function hideTooltip() {
  var tooltip = document.getElementById("HomeBench");
  tooltip.style.display = "none";
}