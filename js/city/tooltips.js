function showTooltip(evt, text) {
  let tooltip = document.getElementById("tt-shelf1");
  tooltip.innerHTML = text;
  tooltip.style.display = "block";
  tooltip.style.left = evt.pageX + 10 + 'px';
  tooltip.style.top = evt.pageY + 10 + 'px';
}

function hideTooltip() {
  var tooltip = document.getElementById("tt-shelf1");
  tooltip.style.display = "none";
}