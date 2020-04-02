let root = document.documentElement;

function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor0 = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor0);
  document.getElementById("c0-r").innerHTML = x;
  document.getElementById("c0-g").innerHTML = y;
  document.getElementById("c0-b").innerHTML = z;
  root.style.setProperty("--bgcolor", bgColor0);

  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor1 = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor1);
  document.getElementById("c1-r").innerHTML = x;
  document.getElementById("c1-g").innerHTML = y;
  document.getElementById("c1-b").innerHTML = z;
  root.style.setProperty("--color1", bgColor1);

  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor2 = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor2);
  document.getElementById("c2-r").innerHTML = x;
  document.getElementById("c2-g").innerHTML = y;
  document.getElementById("c2-b").innerHTML = z;
  root.style.setProperty("--color2", bgColor2);

  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor3 = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor3);
  document.getElementById("c3-r").innerHTML = x;
  document.getElementById("c3-g").innerHTML = y;
  document.getElementById("c3-b").innerHTML = z;
  root.style.setProperty("--color3", bgColor3);

  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor4 = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor4);
  document.getElementById("c4-r").innerHTML = x;
  document.getElementById("c4-g").innerHTML = y;
  document.getElementById("c4-b").innerHTML = z;
  root.style.setProperty("--color4", bgColor4);

  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor5 = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor5);
  document.getElementById("c5-r").innerHTML = x;
  document.getElementById("c5-g").innerHTML = y;
  document.getElementById("c5-b").innerHTML = z;
  root.style.setProperty("--color5", bgColor5);
}

random_bg_color();