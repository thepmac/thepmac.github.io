


function sendTime() {

    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var meridiem;
    var hoursDisp;
    var minsDisp;
    var secsDisp;

    function hoursZero(check1) {
        if (check1 < 10) {
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

    console.log("The current time is " + hoursDisp + ":" + minsDisp + ":" + secsDisp + " " + meridiem);

    document.getElementById('time').innerText = hoursDisp + ":" + minsDisp + ":" + secsDisp  + " " + meridiem;
}

setInterval(sendTime, 300);