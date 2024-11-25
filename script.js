
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
    if(second==""){
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

function deleteAlarm(e){
    let runningAlarm=(e.target.parentElement);
    runningAlarm.remove();
    alarmCount--;
    if(alarmCount==0){
        timerMsg.style.display = "block"
    }    
}


function createAlarm(hour,min,sec){
    // console.log(1)
    
    let activeAlarm = document.createElement("div");
    activeAlarm.classList.add("set-alarm","running-alarm");
    let p =document.createElement("p");
    p.innerText ="Time Left :";
    let activeDigits = document.createElement("div");
    activeDigits.classList.add("active-digits");

    let activeHr =document.createElement("div");
    // hour = hour.padStart(2,0);
    activeHr.innerText = hour;
    let span1 = document.createElement("span");
    span1.innerText =":";

    let activeMin =document.createElement("div");
    // min=min.padStart(2,0);
    activeMin.innerText = min;
    let span2 = document.createElement("span");
    span2.innerText =":";

    let activeSec =document.createElement("div");
    // sec=sec.padStart(2,0);
    activeSec.innerText = sec;

    activeDigits.append(activeHr ,span1,activeMin,span2,activeSec);


    let deleteTimer = document.createElement("button");
    deleteTimer.innerText = "Delete";
    activeAlarm.append(p,activeDigits,deleteTimer);
    deleteTimer.addEventListener("click" ,deleteAlarm);
    showAlarm.append(activeAlarm);

    executeTimer(hour,min,sec,activeSec,activeMin,activeHr);
}


// let count =0
function executeTimer(hour,min,sec,activeSec,activeMin,activeHr){
    
    let time = setInterval(()=>{
        
        
        if(sec==0 && min!=0){

            min--;
            sec =59;
        }
        else if(min ==0 && hour!=0){
            hour--;
            min=59;
        }
        if(hour == 0 && min ==0 && sec==0){
            return clearSetInterval(time);
        }
        sec--
        sec<=9? activeSec.innerText = "0"+sec: activeSec.innerText = sec;
        min<=9? activeMin.innerText = "0"+ min: activeMin.innerText = min;
        hour<=9? activeHr.innerText = "0"+hour: activeHr.innerText =hour;

    },1000)

}
function clearSetInterval(time){
    clearInterval(time);
}