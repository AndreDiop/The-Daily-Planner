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
  
  
  function createRow() {
    for (var i = 0; i < hoursArray.length; i++) {
  
      var row = $("<div>");
      row.addClass("row time-block " + hoursArray[i]);
  
      var hour = $("<div>");
      row.addClass("hour col-auto");
      row.text("     " + hoursArray[i] + "     ");
  
      var textArea = $("<textarea>");
      textArea.addClass("description col");
  
      var button = $("<button>");
      button.addClass("saveBtn btn col-auto");
      button.text("Save Info");
      // row.append(button);
      row.append(hour).append(textArea).append(button);
      $(".container").append(row);
      if (hoursArray[i] === timeNow) {
        textArea.addClass("present");
      } else hoursArray[i] > timeNow;
      textArea.addClass("future");
    }
  }
  
  createRow();
  
