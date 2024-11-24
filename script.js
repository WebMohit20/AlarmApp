
const alarm = document.getElementById("alarm");
const timerMsg = document.getElementById("no-timer");
// const activeAlarm = document.getElementById("active-alarm");

alarm.addEventListener("submit",(e)=>(activeTimer(e)));
let flag = false;
function activeTimer(e){
    e.preventDefault();
    
    const hour = document.getElementById("hours").value;
    const minute = document.getElementById("minutes").value;
    const second = document.getElementById("seconds").value;
    if(hour==""||minute==""||second==""){
        return 
    }
    createAlarm(hour,minute,second);
    flag = true;
    if(flag){
        timerMsg.style.display="none"
        // activeAlarm.style.display = "flex";
    }
}


function createAlarm(hour,min,sec){
    let activeAlarm = document.createElement("div");
    activeAlarm.classList.add("set-alarm","running-alarm");
    let p =document.createElement("p");
    p.innerText ="Time Left :";
    let activeDigits = document.createElement("div");
    activeDigits.classList.add("active-digits");

    let activeHr =document.createElement("div");
    activeHr.innerText = hour;
    let span1 = document.createElement("span");
    span1.innerText =":";

    let activeMin =document.createElement("div");
    activeMin.innerText = min;
    let span2 = document.createElement("span");
    span1.innerText =":";

    let activeSec =document.createElement("div");
    activeSec.innerText = sec;

    activeDigits.append(activeHr ,span1,activeMin,span2,activeSec);


    let deleteTimer = document.createElement("button");
}
// createAlarm();