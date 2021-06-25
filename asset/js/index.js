var now = moment().format("dddd, MMMM Do YYYY, h:mm a"); 

//SETS HEADER TO CURRENT TIME
function headerTime(){
var header = document.getElementById("currentDay");
header.textContent = now;
}

function populateHours(){
    let timeList = $('textarea');
    var hour = moment().format("k");

    //loops through every element that is a textarea and uses a nested ternary operator to assign colors of past present and future
    timeList.each(function(i){
        let listHour = this.dataset.hour;
        listHour == hour ? $(this).addClass('present') : listHour > hour ? $(this).addClass('future') : $(this).addClass('past');
     });
}



let storage = window.localStorage;
var saveButton = $('.saveBtn');

saveButton.on('click', function() {
    let targetField =  $(this).siblings('textarea');
    storage.setItem(targetField.data('hour'), JSON.stringify(targetField.val()));
    console.log(targetField.data('hour'));
});


function init(){
    headerTime();
    populateHours();
    console.log(JSON.parse(storage.getItem('08')));
}

init();