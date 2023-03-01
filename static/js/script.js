// Variables for default clock
let myHour = document.getElementById("hour-arrow");
let myMinute = document.getElementById("minute-arrow");
let mySecond = document.getElementById("second-arrow");
// variables for digital clock
let myDigitDay = document.getElementById("current-day")
let myDigitHour = document.getElementById("digital-hour")
let myDigitMinute = document.getElementById("digital-minute")
let myDigitSecond = document.getElementById("digital-second")
let myDigitAmPm = document.getElementById("am-pm");
// week days array 
let weekDaysArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// Main function
function setClock(){
    // get current date
    const currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    let currentSecond = currentTime.getSeconds();
    let currentDay = currentTime.getDay();
    //  get hand's rotational exact degree 
    myHour.style.transform =  `rotateZ(${(currentHour*30) + (currentMinute / 12)}deg)`;
    myMinute.style.transform = `rotateZ(${currentMinute*6}deg)`;
    mySecond.style.transform =  `rotateZ(${currentSecond*6}deg)`;
    // for digital clock
    myDigitDay.innerHTML = weekDaysArray[currentDay];
    myDigitHour.innerHTML = (currentHour < 10) ? "0" + currentHour : currentHour;
    myDigitMinute.innerHTML = (currentMinute < 10) ? "0" + currentMinute : currentMinute;
    myDigitSecond.innerHTML = (currentSecond < 10) ? "0" + currentSecond : currentSecond;
    // digital clock, am-pm setting
    myDigitAmPm.innerHTML = (currentHour < 12) ? "AM" : "PM";
};
// set function call interval
setInterval(() =>{
    setClock();

});
// scroll up function
function scrollUp(){
    window.scrollTo({
        top: 0
    })
};