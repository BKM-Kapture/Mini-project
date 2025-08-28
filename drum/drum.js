document.addEventListener("keydown",play);


function play(event){
    if(event.key==='w'){
        document.getElementById("d1").play();
    }
    else if(event.key==='a'){
        document.getElementById("d2").play();
    }
    else if(event.key==='s'){
        document.getElementById("d3").play();
    }
    else if(event.key==='q'){
        document.getElementById("d4").play();
    }
    else if(event.key==='e'){
        document.getElementById("d5").play();
    }
    else if(event.key==='d'){
        document.getElementById("d6").play();
    }
    else if(event.key==='r'){
        document.getElementById("d7").play();
    }
    else if(event.key==='f'){
        document.getElementById("d8").play();
    }
}