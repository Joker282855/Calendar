var todaysDate = document.querySelector("#currentDay");
var currentDate = moment();

todaysDate.textContent = currentDate.format("dddd DD, YYYY");

$(".row").mouseenter(function(){
    var time = $(this).text().trim();

    var hour = moment(time, "L").set("hour", 12);

    if (moment().isAfter(hour)) {
        $(this).find("textarea").addClass("future");
    } else if (moment().isBefore(hour)) {
        $(this).find("textarea").addClass("past")
    } else {
        $(this).find("textarea").addClass("present")
    }
})

