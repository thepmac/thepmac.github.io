function onToolTip(evt, text) {
  let tooltip = document.getElementById("ToolTip");
  tooltip.innerHTML = text;
  tooltip.style.display = "block";
  tooltip.style.left = evt.pageX + 10 + 'px';
  tooltip.style.top = evt.pageY + 10 + 'px';
}

function offToolTip() {
  var tooltip = document.getElementById("ToolTip");
  tooltip.style.display = "none";
}