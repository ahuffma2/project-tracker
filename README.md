# Project Tracker
This website allows you to track daily tasks and the times they were assigned.

## Usage
User can input their daily task in a an hour blocks and save them. The user can see each hour block color coded according to past tasks, current tasks , and future tasks.

## Code
I have four main methods. The first is simple and uses jquery to grab a the header object and set it to the current date and time using moment.js 
```
  $('#currentDay').text(now);

```

This function is used to assign a time to each time block and color theme based on if the block represents an hour that is in the past, present, or future. 
The ternary operator is used to determine this. I use an each function to apply this function to every element with <textarea>.
```
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
  });
  populateTextField(timeList);
}
```
Each textarea has an added data-hour attribute assigned in html class with numbers 08-17 (Using military time to determine hour math, while allowing for non-military time to be displayed to the user. TO do this I us a similar each function to load storage of previously saved elements. I use the .data(hour) as the ID to ensure that each textarea loaded corresponds to the correct time-block.
```
function populateTextField(timeList) {
  timeList.each(function (i) {
    if (JSON.parse(storage.getItem($(this).data("hour"))) !== null) {

      $(this).text(JSON.parse(storage.getItem($(this).data("hour"))));
      console.log(JSON.parse(storage.getItem($(this).data("hour"))));
    }
  });
}
```
 I set an event listener for each button (with class name saveBtm) on screen and when clicked, I target the button's sibling with class name textarea to store to local storage.
```
saveButton.on("click", function () {
  let targetField = $(this).siblings("textarea"); //I grab the textarea attached to whicheve button is clicked and assign that to a variable

  storage.setItem(targetField.data("hour"), JSON.stringify(targetField.val()));
});
```
and lastly an Init() function to call headerTime and populateHours. 
  
## Technology
 * JAVASCRIPT
 * HTML
 * CSS
 * JQUERY
 * BOOTSTRAP

## Author
  [Austin Huffman](https://www.linkedin.com/in/ahuffma2)
