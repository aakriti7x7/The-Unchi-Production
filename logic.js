let health = document.getElementById("progress")
let inc = health.offsetWidth



$(document).ready(function(){
    $(document).on('click',function(){
        work()
    });
});



function green(){
    inc = health.offsetWidth
    health.style.width= (inc + 10)+"px";
    if(inc===690){
        health.style.backgroundColor="pink";
    }
}

function red(){
    inc = health.offsetWidth
    health.style.width= (inc - 10)+"px";
    if(inc<200){
        health.style.backgroundColor = "red";
    }
    if(inc===2){
        console.log("looser")
    }
}


function work(){
    var x = Math.random();
    yumyum()
    console.log(inc)

}

function yumyum(){
    var audio = new Audio('yum.ogg');
    audio.play();
    green()
}
function ewwww(){
    var audio = new Audio('eww.ogg');
    audio.play();
    red()
    
}
