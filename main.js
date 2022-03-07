const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');


function countdown() {
    let inputDate = document.getElementById('inputDate')

    let newYears = inputDate.value
    const newYearsDate = new Date(newYears);
    const currentDate = new Date()
    const totalSeconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML =formatTime(days) 
    hoursEl.innerHTML =formatTime(hours) 
    minsEl.innerHTML =formatTime(mins) 
    secondsEl.innerHTML =formatTime(seconds) 

    console.log(inputDate.value)
}

function formatTime(time){
    return time < 10 ? `0${time}` : time
}
setInterval(countdown, 1000);

