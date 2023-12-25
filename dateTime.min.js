const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
const months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];

var dateTime = new Date();

function oneLengthDetect(value) {
    if (getLength(value) == 1) return "0" + value;
    else return value;
}

function getLength(value) {
	return toString(value).length;
}

function toString(value) {
    return replaceClear(value.toString());
}

function replaceClear(value) {
	return value.replace(" ","").trim();
}

function toFloat(value) {
    return (value).toFixed(2);
}

function getdateTimeNow() {
    let year = dateTime.getFullYear();
    let month = oneLengthDetect(dateTime.getMonth() + 1);
    let day = dateTime.getDate();
    let hour = oneLengthDetect(dateTime.getHours());
    let minute = oneLengthDetect(dateTime.getMinutes());
    let second = oneLengthDetect(dateTime.getSeconds());
    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
}

function getDateYear() {
    return dateTime.getFullYear();
}

function getDateMonth() {
    return oneLengthDetect(dateTime.getMonth() + 1);
}

function getDateDay() {
    return oneLengthDetect(dateTime.getDate());
}

function getDateHour() {
    return oneLengthDetect(dateTime.getHours());
}

function getDateMinute() {
    return oneLengthDetect(dateTime.getMinutes());
}

function getDateSecond() {
    return oneLengthDetect(dateTime.getSeconds());
}

function weekOfDay() {
    let indexName = dateTime.getDay();
    return " " + days[indexName];
}

function monthOfDay() {
    let indexName = dateTime.getMonth();
    return " " + months[indexName];
}

function dateDiff(date1, date2) {
    let diff = Math.abs(date2 - date1);
    let result = Math.floor(diff / 1000);
    if (result >= 1) return result;
    else return 0;
}

function secondToDate(value) {
    let day = Math.floor(value / (24 * 3600));
    let lastSecond = (value % (24 * 3600)%3600);
    let hour = Math.floor(lastSecond / 3600);
    let minute = Math.floor(lastSecond / 60);
    let finishSecond = lastSecond % 60;
    let result = "";
    if (day >= 1) {
        result += day + " gün ";
    }
    if (hour >= 1) {
        result += hour + " saat ";
    }
    if (minute >= 1) {
        result += minute + " dakika ";
    }
    result += finishSecond + " saniye ";
    return result;
}
