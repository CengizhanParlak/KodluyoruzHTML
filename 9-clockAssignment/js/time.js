var isim;
var day, time, hours, minutes, seconds;
var am_or_pm;

function askForName() {
    isim = prompt("Could you enter your name:");

    if (isim != null) {
        document.getElementById("isim").innerText = isim;
        document.getElementById("isim").textContent = isim;
        document.getElementById("isim").classList.remove("colorChangingP");
        document.getElementById("isim").classList.add("text-info");
    }
}

function checkAndShowTime() {

    var date = new Date();
    hours = date.getHours(); //0 - 23
    minutes = date.getMinutes(); //0 - 59
    seconds = date.getSeconds(); //0 - 59
    am_or_pm = "AM";

    if (hours == 0) {
        hours = 12;
    }

    if (hours == 12) {
        am_or_pm = "PM";
    }

    if (hours > 12) {
        hours -= 12;
        am_or_pm = "PM";
    }

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    time = `${hours}:${minutes}:${seconds} ${am_or_pm}`

    document.getElementById("clockNow").innerText = time;
    document.getElementById("clockNow").textContent = time;
    setTimeout(checkAndShowTime, 1000);

}

function checkAndShowDay() {
    var date = new Date();
    day = date.getDay();

    switch (day) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    }

    document.getElementById("dayNow").innerText = day;
    document.getElementById("dayNow").textContent = day;
}

function showTimeLeftToWeekend() {
    var date = new Date();
    day = date.getDay();
    if (day == 0 || day == 6) {
        let dayToday = (day == 0) ? "Sunday" : "Saturday";
        document.getElementById("p1").innerText = "";
        document.getElementById("timeLeftToWeekend").innerText = `You're already on the weekend. Enjoy your ${dayToday} and have some rest. You've deserved it.`

        let remainingDay = day % 5; //pazar günündeysek 0 gün kalmıştır. sadece saat dakika hesaplarız. cumartesi günündeysek 
        //1 gün kaldığını anlarız. day = 1 olur.
        hours = date.getHours();
        minutes = date.getMinutes();
        seconds = date.getSeconds();

        let remainingHours = (23 - hours);
        let remainingMinutes = 59 - minutes;
        let remainingSeconds = 59 - seconds;
        remainingHours = (remainingHours < 10) ? "0" + remainingHours : remainingHours;
        remainingMinutes = (remainingMinutes < 10) ? "0" + remainingMinutes : remainingMinutes;
        remainingSeconds = (remainingSeconds < 10) ? "0" + remainingSeconds : remainingSeconds;
        time = `${remainingDay} day and ${remainingHours}:${remainingMinutes}:${remainingSeconds} hours.`

        document.getElementById("timeLeftToWeekday").innerText = time;
    }
    else {
        document.getElementById("timeLeftToWeekday").innerText = "You're already in a weekday. Try to do your best and enjoy the journey rather not just focusing on the outcome. Everything's gonna be alright.";

        let daysLeft = (6 - day - 1); 
        hours = date.getHours();
        minutes = date.getMinutes();
        seconds = date.getSeconds();

        let remainingHours = (23 - hours);
        let remainingMinutes = 59 - minutes;
        let remainingSeconds = 59 - seconds;
        remainingHours = (remainingHours < 10) ? "0" + remainingHours : remainingHours;
        remainingMinutes = (remainingMinutes < 10) ? "0" + remainingMinutes : remainingMinutes;
        remainingSeconds = (remainingSeconds < 10) ? "0" + remainingSeconds : remainingSeconds;
        let timeLeft = `${remainingHours}:${remainingMinutes}:${remainingSeconds}`
        let left = `${daysLeft} days and ${timeLeft} left`;
        document.getElementById("timeLeftToWeekend").innerText = left;
    }
    setTimeout(showTimeLeftToWeekend, 1000);
}

askForName();
checkAndShowTime();
checkAndShowDay();
showTimeLeftToWeekend();