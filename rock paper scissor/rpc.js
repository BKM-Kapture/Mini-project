var choices=["rock","scissor","paper"];

function random(id){
    let cpu=choices[Math.floor(Math.random() * choices.length)];
    var img=document.getElementById("cpu_img");
    if(cpu=="rock"){
        img.setAttribute("src","rock.png");
    }
    else if(cpu=="paper"){
        img.setAttribute("src","paper.png");
    }
    else{
        img.setAttribute("src","scissor.png");
    }
    if(cpu==id){
        document.getElementById("result").innerText="TIE";
    }
    else{
        if ((cpu=="rock" && id=="scissor" )||(cpu=="paper" && id=="rock" )||(cpu=="scissor" && id=="paper") ) {
            document.getElementById("result").innerText="LOST";
        }
        else{
            document.getElementById("result").innerText="WON";
        }
    }
}