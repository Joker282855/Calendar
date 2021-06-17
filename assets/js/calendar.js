var eventList = []; 

var buttonClickInfo = document.querySelector("#btn");
var textEventInfo = document.querySelector("col-11");
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

var buttonClickHandler = function(entry) {  
  console.log(entry);
};

$(".container").on("click", "textarea", function() {
  var area = $(this);
  area.trigger("focus");
});

$(".container").on("blur", "textarea", function() {
  var entry = $(this).val();
  console.log(entry);
});

auditText();

buttonClickInfo.addEventListener("click", buttonClickHandler);

