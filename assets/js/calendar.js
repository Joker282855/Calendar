var containerText = document.getElementsByClassName("container");
var todaysDate = document.querySelector("#currentDay");
var currentDate = moment();

todaysDate.textContent = currentDate.format("dddd DD, YYYY");

var auditText = function() {
    // set the background color for timeblocks acording to the past
    $(containerText).find(".morning").addClass("past");

    $(containerText).find(".lunch").addClass("present");

    $(containerText).find(".afternoon").addClass("future");

};

auditText();