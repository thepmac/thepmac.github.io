let root = document.documentElement;

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor1 = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor1);
 root.style.setProperty("--color-1", bgColor1);

    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor2 = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor2);
 root.style.setProperty("--color-2", bgColor2);

    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor3 = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor3);
 root.style.setProperty("--color-3", bgColor3);
    }

random_bg_color();