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

//———————————————————————————————————//

function onHomeBench(evt, text) {
  let tooltip = document.getElementById("HomeBench");
  tooltip.innerHTML = text;
  tooltip.style.display = "block";
  tooltip.style.left = evt.pageX + 10 + 'px';
  tooltip.style.top = evt.pageY + 10 + 'px';
}

function offHomeBench() {
  var tooltip = document.getElementById("HomeBench");
  tooltip.style.display = "none";
}

//———————————————————————————————————//

function onHomePlant(evt, text) {
  let tooltip = document.getElementById("HomePlant");
  tooltip.innerHTML = text;
  tooltip.style.display = "block";
  tooltip.style.left = evt.pageX + 10 + 'px';
  tooltip.style.top = evt.pageY + 10 + 'px';
}

function offHomePlant() {
  var tooltip = document.getElementById("HomePlant");
  tooltip.style.display = "none";
}

//———————————————————————————————————//

function onHomeShoeRack(evt, text) {
  let tooltip = document.getElementById("HomeShoeRack");
  tooltip.innerHTML = text;
  tooltip.style.display = "block";
  tooltip.style.left = evt.pageX + 10 + 'px';
  tooltip.style.top = evt.pageY + 10 + 'px';
}

function offHomeShoeRack() {
  var tooltip = document.getElementById("HomeShoeRack");
  tooltip.style.display = "none";
}