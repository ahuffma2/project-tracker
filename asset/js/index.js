var now = moment().format("dddd, MMMM Do YYYY, h:mm a"); 
var hour = moment().format("k");

//SETS HEADER TO CURRENT TIME
function headerTime(){
var header = document.getElementById("currentDay");
header.textContent = now;
}



function populateHours(){
    let timeArr = [];
    let timeList = $('.time');

    timeList.each(function(i){
        timeArr.push(this);
    });

    // let hour = moment(timeArr[1].textContent).format("kk a");
    // console.log(hour);
    // if(hour<now)
    // console.log("EURIKA");

    if ( 8 < hour){
        console.log("You are an idiot");
    }
    //if(timeArr[1].isBefore(now))
   // console.log(timeArr[0].textContent); // use this to grab each links time

}

//check KK time
function init(){
    headerTime();
    populateHours();
}

init();

