let timerdiplay = document.querySelector('.timerDisplay');
let stopbtn =document.getElementById('stopbtn');
let startbtn =document.getElementById('startbtn');
let resetbtn =document.getElementById('resetbtn');

let msec = 00 ;
let secs = 00 ;
let mins = 00 ;
// let msec = 00;
// let secs = 00;
// let mins = 00;

let timerId =null;
startbtn.addEventListener('click',function(){
    if(timerId !== null){
        clearInterval(timerId);

    }
    timerId =  setInterval(startTimer,10);
});

stopbtn.addEventListener('click',function(){    
        clearInterval(timerId);

});
resetbtn.addEventListener('click',function(){    
    clearInterval(timerId);
    timerdiplay.innerHTML = `00 : 00 : 00`;
    msec = secs = mins = 00;

});

function startTimer(){
    msec++;
    if(msec == 100){
        msec =0;
        secs++;
        if(secs ==60){
           secs =0;
           mins++;
        }
    }
    let msecstring = msec < 10 ? `0${msec}` : msec;
    let secsstring = secs < 10 ? `0${secs}` : secs;
    let minsstring = mins < 10 ? `0${mins}` : mins;

    timerdiplay.innerHTML= `${minsstring} : ${secsstring} : ${msecstring}`;
}