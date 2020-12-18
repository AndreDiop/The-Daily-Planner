var hoursArray = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

var timeNow = moment().format("HH");
var date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

console.log(date);
function createRow() {
  for (var i = 0; i < hoursArray.length; i++) {
    var row = $("<div>");
    row.addClass("row time-block " + hoursArray[i]);

    var hour = $("<div>");
    row.addClass("hour col-auto");
    row.text("     " + hoursArray[i] + "00   ");

    var textArea = $("<textarea>");
    textArea.addClass("description col");

    var button = $("<button>");
    button.addClass("saveBtn btn col-auto fas fa-save");
    button.text("Save");

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
$("#currentDay").text(date);
createRow();
