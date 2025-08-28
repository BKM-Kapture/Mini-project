var hour=document.getElementById("h").value=0;
var min=document.getElementById("m").value=0;
var sec=document.getElementById("s").value=0;
var interval;

function start(){
    hour=document.getElementById("h").value;
    min=document.getElementById("m").value;
    sec=document.getElementById("s").value;
    if(sec >= 60){
        let extraMin = Math.floor(sec / 60);
        sec = sec % 60;
        min = parseInt(min) + extraMin;
    }
    if(min >= 60){
        let extraHour = Math.floor(min / 60);
        min = min % 60;
        hour = parseInt(hour) + extraHour;
    }
    interval=setInterval(display,1000);
}

function display(){
    document.getElementById("text").innerText=`${hour}:${min}:${sec}`;
    sec--;
    if(sec <= -1){
        sec = 59;
        min--;
    }
    if(min <= -1){
        min = 59;
        hour--;
    }
    if(hour <= -1){
        reset();
    }
}


function reset(){
    clearInterval(interval);
    document.getElementById("text").innerText=`00:00:00`;
}