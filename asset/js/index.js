var now = moment().format("dddd, MMMM Do YYYY, h:mm a");

//SETS HEADER TO CURRENT TIME
function headerTime() {
  var header = document.getElementById("currentDay");
  header.textContent = now;
}

//This function assigns the colors based on time
function populateHours() {
  let timeList = $("textarea"); //timeList is used frequently, its usually whatever respective textArea is called. 
  var hour = moment().format("k");

  //loops through every element that is a textarea and uses a nested ternary operator to assign colors of past present and future
  timeList.each(function (i) {
    let listHour = this.dataset.hour;
    listHour == hour
      ? $(this).addClass("present")
      : listHour > hour
      ? $(this).addClass("future")
      : $(this).addClass("past"); 
      populateTextField(timeList);
  });
  
}

//This function takes the same timeList passed on from populateHours
//Checks to see the storage, if it's null it returns, if not it prints whatever was saved.
//I am using $(this).data(hour) for the identifier for each textarea.

function populateTextField(timeList) {
    if (JSON.parse(storage.getItem($(timeList).data("hour"))) !== null) {

      $(timeList).text(JSON.parse(storage.getItem($(timeList).data("hour"))));
      console.log(JSON.parse(storage.getItem($(timeList).data("hour"))));
    }
}


let storage = window.localStorage;
var saveButton = $(".saveBtn");

saveButton.on("click", function () {
  let targetField = $(this).siblings("textarea"); //I grab the textarea attached to whicheve button is clicked and assign that to a variable

  storage.setItem(targetField.data("hour"), JSON.stringify(targetField.val()));
});

function init() {
  headerTime();
  populateHours();
}

init();
