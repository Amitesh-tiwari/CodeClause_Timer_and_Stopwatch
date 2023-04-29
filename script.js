const addTrailingZero =(num)=>{
    return num <10 ? "0" +num :num;
}
const updateTime = ()=>{
    const time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let ampm = hours >=12 ?"PM":"AM";
    let otherampm = hours>=12 ? "AM":"PM";

    hours = hours%12|| 12;
    hours = addTrailingZero(hours);
    minutes = addTrailingZero(minutes);
    seconds = addTrailingZero(seconds);

    $("#hour").html(hours);
    $("#min").html(minutes);
    $("#sec").html(seconds);
    $("#ms").html(miliseconds);
    $("#ampm").html(ampm);
    $("#other-ampm").html(otherampm);
    
}
updateTime();
setInterval(updateTime,1000);

let stopwatchHours = 0,
    stopwatchMinutes =0,
    stopwatchSeconds =0,
    stopwatchMiliSeconds = 0,
    stopwatchRunning = false,
    stopwatchInterval;
const stopwatch = ()=>{

    stopwatchMiliSeconds++;
    
    if(stopwatchMiliSeconds === 100){
        stopwatchSeconds++;
        stopwatchMiliSeconds =0;
    }
    if(stopwatchSeconds === 60){
        stopwatchMinutes++;
        stopwatchSeconds =0;
    }
    if(stopwatchMinutes === 60){
        stopwatchHours++;
        stopwatchMinutes =0;
    }
    $("stopwatch-hour").html(addTrailingZero(stopwatchHours));
    $("stopwatch-min").html(addTrailingZero(stopwatchMinutes));
    $("stopwatch-sec").html(addTrailingZero(stopwatchSeconds));
    $("stopwatch-ms").html(addTrailingZero(stopwatchMiliSeconds));
};

const startStopwatch = ()=>{
    if(!stopwatchRunning){
        stopwatch = setInterval(stopwatch, 10);
        stopwatchRunning = true;
    }
};
const stopStopwatch =()=>{
    clearInterval(stopwatchInterval);
    stopwatchRunning = false;
};
$(".startStopwatch").click(function(){
    startStopwatch();
})