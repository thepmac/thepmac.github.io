let root = document.documentElement;

function random_color_1() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor1 = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor1);
  document.getElementById("c1r").innerHTML = x;
  document.getElementById("c1g").innerHTML = y;
  document.getElementById("c1b").innerHTML = z;
  root.style.setProperty("--color1", bgColor1);
}
random_color_1();

function random_color_2() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor2 = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor2);
  document.getElementById("c2r").innerHTML = x;
  document.getElementById("c2g").innerHTML = y;
  document.getElementById("c2b").innerHTML = z;
  root.style.setProperty("--color2", bgColor2);
}
random_color_2();

function random_color_3() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor3 = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor3);
  document.getElementById("c3r").innerHTML = x;
  document.getElementById("c3g").innerHTML = y;
  document.getElementById("c3b").innerHTML = z;
  root.style.setProperty("--color3", bgColor3);
}
random_color_3();

function random_color_4() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor4 = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor4);
  document.getElementById("c4r").innerHTML = x;
  document.getElementById("c4g").innerHTML = y;
  document.getElementById("c4b").innerHTML = z;
  root.style.setProperty("--color4", bgColor4);
}
random_color_4();

function random_color_5() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor5 = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor5);
  document.getElementById("c5r").innerHTML = x;
  document.getElementById("c5g").innerHTML = y;
  document.getElementById("c5b").innerHTML = z;
  root.style.setProperty("--color5", bgColor5);
}
random_color_5();