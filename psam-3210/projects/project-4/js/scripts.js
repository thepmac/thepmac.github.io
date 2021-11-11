let root = document.documentElement;

    function random_color() {
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        let bgColor = "rgb(" + x + "," + y + "," + z + ")";

        root.style.setProperty("--bgColor", bgColor);
    }
    random_color();

document.addEventListener("blur", function () {
    console.log("away");
    document.getElementById("date-box").setAttribute("style", "display:block;");
});

document.addEventListener("focus", function () {
    console.log("back");
    document.getElementById("date-box").setAttribute("style", "display:none;");
});

function sendTime() {
    let root = document.documentElement;

    function random_color() {
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        let bgColor = "rgb(" + x + "," + y + "," + z + ")";

        root.style.setProperty("--bgColor", bgColor);
    }
    random_color();

    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var meridiem;
    var hoursDisp;
    var minsDisp;
    var secsDisp;

    function hoursZero(check1) {
        if (check1 < 1) {
            hoursDisp = 12;
        } else if (check1 > 0 && check1 < 10) {
            hoursDisp = "0" + hours;
        } else if (check1 > 9 && check1 < 13) {
            hoursDisp = hours;
        } else {
            hoursDisp = hours - 12;
        }
    }

    function minutesZero(check2) {
        if (check2 < 10) {
            minsDisp = "0" + minutes;
        } else {
            minsDisp = minutes;
        }
    }

    function secondsZero(check3) {
        if (check3 < 10) {
            secsDisp = "0" + seconds;
        } else {
            secsDisp = seconds;
        }
    }

    function setMeridiem(check4) {
        if (check4 < 12) {
            meridiem = "a.m.";
        } else {
            meridiem = "p.m.";
        }
    }


    hoursZero(hours);
    minutesZero(minutes);
    secondsZero(seconds);
    setMeridiem(hours);

    document.getElementById('date-box').innerHTML = "<span class='clock'>" + hoursDisp + ":" + minsDisp + ":" + secsDisp + " " + meridiem + "</span>";
}
setInterval(sendTime, 1000);