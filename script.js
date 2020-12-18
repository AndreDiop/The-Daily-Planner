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

var timeNow = moment().format("HHmm");

console.log(timeNow);

function createRow() {
  for (var i = 0; i < hoursArray.length; i++) {
    console.log(hoursArray[i]);

    var row = $("<div>");
    row.addClass("row time-block " + hoursArray[i]);

    var hour = $("<div>");
    row.addClass("hour col-auto");
    row.text("     " + hoursArray[i] + "     ");
    

    //    row.addClass("hour col-auto");
    //    row.text("     " + hoursArray[i] + "     ");

    // IF hoursArray[i] < timeNow
    // Add a class of "past"
    // ELSE IF hoursArray is the same as (or equal to) timeNow
    // Add a class of "current"
    // ELSE (hoursArray[i] > timeNow)
    // Add a class of "future"

    //     if(hoursArray[i] === timeNow )

    // if/else  x3 for past present and future

    var textArea = $("<textarea>");
    textArea.addClass("description col");

    var button = $("<button>");
    button.addClass("saveBtn btn col-auto");
    button.text("Save Info");
    // row.append(button);
    row.append(hour).append(textArea).append(button);
    $(".container").append(row);
  }
}

createRow();

// [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(createRow);
// createRow();
// check font awesome version, make sure linked to html
// add to button <button class="trigger"></button></button></button><i class="fas fa-camera"></i></button>
