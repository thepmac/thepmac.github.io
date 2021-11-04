var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var hoursDisp;
var minsDisp;

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

hoursZero(hours);
minutesZero(minutes);

console.log("The current time is " + hoursDisp + ":" + minsDisp);

document.querySelector('#hours').innerHTML = (hoursDisp);
document.querySelector('#minutes').innerHTML = (minsDisp);

/*function timeOut() {
    setTimeout(function () { document.querySelector('main').style.display = "none" }, 3000);
}
timeOut();*/

$(window).scroll(function() {
    $('main').stop(true, true).show().fadeOut('fast');
  });