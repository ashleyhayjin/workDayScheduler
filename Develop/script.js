$(".saveBtn").click(function () {
  var textInside = $(this).siblings(".description");
  var time = $(this).parent().attr("id");
  console.log(textInside.val());
  var textValue = textInside.val();
  localStorage.setItem(time, textValue);
});

//pulling the id and class so that it will save into local storage
$("#9-am .description").val(localStorage.getItem("9am"));
$("#10-am .description").val(localStorage.getItem("10am"));
$("#11-am .description").val(localStorage.getItem("11am"));
$("#12-pm .description").val(localStorage.getItem("12pm"));
$("#13-pm .description").val(localStorage.getItem("1pm"));
$("#14-pm .description").val(localStorage.getItem("2pm"));
$("#15-pm .description").val(localStorage.getItem("3pm"));
$("#16-pm .description").val(localStorage.getItem("4pm"));
$("#17-pm .description").val(localStorage.getItem("5pm"));
$("#18-pm .description").val(localStorage.getItem("6pm"));


var currentDay = $("#currentDay");
currentDay.text(moment().format("dddd, MMMM Do YYYY"));
var now = moment().toDate();
console.log(now);
var hour = moment().hour();
console.log(hour);



//function for the coloring of the subject. 
function changeColorTime() {
  var hour = moment().hour();
  $(".time-block").each(function () {
    var timeBlock = $(this).attr("id");
    console.log(timeBlock.split("-"));
    var timeBlockFinal = Number(timeBlock.split("-")[0]);
        console.log(timeBlockFinal);
        console.log(typeof timeBlockFinal);
        console.log(hour);
        console.log(typeof hour);
    if (timeBlockFinal < hour) {
      $(this).addClass("past");
    } else if (timeBlockFinal === hour) {
      $(this).addClass("present");
    } else{
      $(this).addClass("future");
    }
  });
}

changeColorTime();
