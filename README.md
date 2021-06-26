# Project Tracker
This website allows you to track daily tasks and the times they were assigned.

## Usage
User can input their daily task in a an hour blocks and save them. The user can see each hour block color coded according to past tasks, current tasks , and future tasks.

## Code
I have four main methods. The first is simple and uses jquery to grab a the header object and set it to the current date and time using moment.js 
```
function headerTime() {
  $('#currentDay').text(now);
}

```
