
const alarm = document.getElementById("alarm");
const timerMsg = document.getElementById("no-timer");
const showAlarm = document.querySelector(".alarm-display");
// const activeAlarm = document.getElementById("active-alarm");
let alarmCount = 0;

alarm.addEventListener("submit",(e)=>(activeTimer(e)));
let flag = false;

function activeTimer(e){
    e.preventDefault();
    
    const hour = document.getElementById("hours").value;
    const minute = document.getElementById("minutes").value;
    const second = document.getElementById("seconds").value;
    if(second=="" && hour =="" && minute ==""){
        return 
    }
    timerMsg.style.display = "none"
    createAlarm(hour,minute,second);

    flag = true;
    if(flag){
        timerMsg.style.display="none"
       
    }
    alarmCount++;
}



let activeAlarm=null;
function createAlarm(hour,min,sec){
    // console.log(1)
    
    activeAlarm = document.createElement("div");
    activeAlarm.classList.add("set-alarm","running-alarm");
    let p =document.createElement("p");
    p.innerText ="Time Left :";
    let activeDigits = document.createElement("div");
    activeDigits.classList.add("active-digits");

    let activeHr =document.createElement("div");
    hour = hour.padStart(2,0);
    activeHr.innerText = hour;
    let span1 = document.createElement("span");
    span1.innerText =":";

    let activeMin =document.createElement("div");
    min=min.padStart(2,0);
    activeMin.innerText = min;
    let span2 = document.createElement("span");
    span2.innerText =":";

    let activeSec =document.createElement("div");
    sec=sec.padStart(2,0);
    activeSec.innerText = sec;

    activeDigits.append(activeHr ,span1,activeMin,span2,activeSec);


    let deleteTimer = document.createElement("button");
    deleteTimer.innerText = "Delete";
    activeAlarm.append(p,activeDigits,deleteTimer);
    deleteTimer.addEventListener("click" ,(e)=>deleteAlarm(e));
    showAlarm.append(activeAlarm);

    executeTimer(hour,min,sec,activeSec,activeMin,activeHr);
}


let time =null;
function executeTimer(hour,min,sec,activeSec,activeMin,activeHr){
    
    time = setInterval(()=>{
        
        if(hour == 0 && min ==0 && sec==0){
            return clearSetInterval(time);
        }
        if(sec==0 ){
            if(min!=0){
                min--;
                sec = 60;
            }
            sec=60;
        }
        else if(min ==0  && hour!=0  ){
            // hour--;
            min=59;
        }
        
        sec--
        sec =(sec.toString()).padStart(2,"0");
        activeSec.innerText = sec;
        min = min.toString().padStart(2,"0");
        activeMin.innerText = min;
        hour = hour.toString().padStart(2,"0");
        activeHr.innerText=hour;

    },1000)
    
}
function clearSetInterval(time,delClick){
    clearInterval(time);
    // activeAlarm.classList.remove("running-alarm");
    console.log(delClick);
    
    let child=activeAlarm.childNodes;
    let [p,timer,btn] = child;
    p.innerText = "Time is up !"
    timer.style.display = "none";
    btn.innerText = "Stop"
    if(!delClick){
        let audio = new Audio('https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg');
        audio.play();
    }
    activeAlarm.classList.add("end");
}

function deleteAlarm(e){
    let delClick = true;
    clearSetInterval(time,delClick)
    let runningAlarm=(e.target.parentElement);
    runningAlarm.remove();
    alarmCount--;
    if(alarmCount==0){
        timerMsg.style.display = "block"
    }    
}