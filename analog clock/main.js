
const hourHand = document.getElementById('hourHand');
const minuteHand = document.getElementById('minuteHand');
const secondHand = document.getElementById('secondHand');

setInterval(runClock, 1000);

function runClock() {
    let date = new Date();
    let seconds = date.getSeconds() / 60;
    let minutes = (date.getMinutes() + seconds) / 60;
    let hour = (date.getHours() + minutes) / 12;

    secondHand.style.transform = "rotate(" + (seconds * 360) + "deg)";
    minuteHand.style.transform = "rotate(" + (minutes * 360) + "deg)";
    hourHand.style.transform = "rotate(" + (hour * 360) + "deg)";
}

runClock();