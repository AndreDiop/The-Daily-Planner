var hoursArray = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
var textArea = $("<textarea>");
var button = $("<button>");
var timeNow = moment().format("HH");
var date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
var hour = $("<div>");
var eventEl = localStorage.getItem(textArea);
var inputArray = [];

$("#currentDay").text(date);

// $(document).ready(initialize){


// }

function createRow() {
  for (var i = 0; i < hoursArray.length; i++) {
    var row = $("<div>");
    row.addClass("row time-block " + hoursArray[i]);

    hour = $("<div>");
    row.addClass("hour col-auto");
    row.text("     " + hoursArray[i] + "00   ");

    textArea = $("<textarea>");
    textArea.addClass("description col");

    button = $("<button>");
    button.addClass("saveBtn btn col-auto fas fa-save");

    row.append(hour).append(textArea).append(button);
    $(".container").append(row);
    if (timeNow < hoursArray[i]) {
      textArea.addClass("future");
    } else if (timeNow > hoursArray[i]) {
      textArea.addClass("past");
    } else if (timeNow === hoursArray[i]) {
      textArea.addClass("present");
    }
  }
}
createRow();

$(".saveBtn").on("click", function () {
  console.log("This works");
  input = $(".description").val();
  inputArray.push(input);
  localStorage.setItem("User Input", JSON.stringify(inputArray));
});
