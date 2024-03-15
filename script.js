let hrs = 0;
let min = 0;
let sec = 0;
let milisec = 0;

let getHrs = document.getElementById("hrs");
let getMin = document.getElementById("min");
let getSec = document.getElementById("sec");
let getMiliSec = document.getElementById('milisec');

let interval;

function timer(){
    milisec++;
    getMiliSec.innerHTML = milisec;
    if (milisec>=100){
        sec++;
        getSec.innerHTML = sec;
        milisec = 0;
        if (sec >= 60){
            min++;
            getMin.innerHTML = min;
            sec = 0;
        }
        if (min >=60){
            hrs++;
            getHrs.innerHTML = hrs;
            hrs = 0;
        }
    }

}

function start(){
    interval = setInterval(timer, 10)
    document.getElementById('start').setAttribute('disabled','');
    document.getElementById('stop').removeAttribute('disabled')
    document.getElementById('reset').removeAttribute('disabled') 
}

function stop(){
    clearInterval(interval);
    document.getElementById('stop').setAttribute('disabled','')
    document.getElementById('start').removeAttribute('disabled');
    document.getElementById('reset').removeAttribute('disabled')
}

function reset(){
    min = 0;
    hrs = 0;
    sec = 0;
    milisec = 0;
    
    getHrs.innerHTML = hrs;
    getMin.innerHTML = min;
    getSec.innerHTML = sec;
    getMiliSec.innerHTML = milisec;

    stop()

    document.getElementById("start").removeAttribute("disabled")
    document.getElementById("reset").setAttribute("disabled", '')
    document.getElementById("stop").setAttribute("disabled", '')

}