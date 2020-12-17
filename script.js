// Create an element 
var row = $("<div>");
row.addClass("row time-block");

var timeEl = $("<div>");
row.addClass("hour col");
row.append(timeEl);


var textArea = $("<textarea>");
textArea.addClass("past description col-10");
row.append(textArea);


var button = $("<button>");
button.addClass("saveBtn btn btn-secondary col");
row.append(button);

$(".container").append(row);



// add some content





// append to the document