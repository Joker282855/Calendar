var todaysDate = document.querySelector("#currentDay");
var currentDate = moment();

todaysDate.textContent = currentDate.format("MM, DD, YYYY");