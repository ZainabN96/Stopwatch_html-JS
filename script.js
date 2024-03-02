function timeToString(time){
    
   // debugger;
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);
    
    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm)* 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss)* 100;
    let ms = Math.floor(diffInMs);   
    //debugger;
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");

    return `${formattedMM}:${formattedSS}:${formattedMS}`;
}
let startTime;
let elapsedTime = 0;
let timeInterval;

//Create Function to modify innerHTML
function print(txt){
    document.getElementById("display").innerHTML = txt;
}

//Create "start", "pause" and "reset" functions
function start(){
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime(){
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 10);
    showButton("PAUSE");
}
function pause(){
    debugger;
    clearInterval(timerInterval);
    showButton("PLAY");
}
function reset(){
    clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
    showButton("PLAY");
}
//create function to display buttons
function showButton(buttonKey){
    const buttonToShow = buttonKey ===
    "PLAY" ? playButton : pauseButton;
    const buttonToHide = buttonKey ===
    "PLAY" ? pauseButton : playButton;
    buttonToShow.style.display = "block";
    buttonToHide.style.display = "none";
}

// Create event Listeners
let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let resetButton = document.getElementById("resetButton");

playButton.addEventListener("click", start);
pauseButton.addEventListener("click" , pause);
resetButton.addEventListener("click", reset);