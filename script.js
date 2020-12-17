// Create an element
var hoursArray = [
  "0900",
  "1000",
  "1100",
  "1200",
  "1300",
  "1400",
  "1500",
  "1600",
  "1700",
];
var presentTime = moment();

for (var i = 0; i < hoursArray.length; i++) {
  console.log(hoursArray[i]);
}

function createRow() {
  var row = $("<div>");
  row.addClass("row time-block");

  var hour = $("<div>");
  row.addClass("hour col-auto");
  row.text("     "+hoursArray[0]+"     ");
  row.append(hour);

  var textArea = $("<textarea>");
  textArea.addClass("description col-10");
  row.append(textArea);

  var button = $("<button>");
  button.addClass("saveBtn btn col");
  button.text("Save Info");
  row.append(button);

  $(".container").append(row);
}

createRow();

// add some content

// append to the document
