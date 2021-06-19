// // from data.js
var tableData = data;
var tbody = d3.select("tbody");
var button = d3.select("button");
var form = d3.select("form");

//Create Table from data.js
tableData.forEach((ufos) => {
    var row = tbody.append("tr");
    Object.entries(ufos).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});

//Attached de event to the button
button.on("click", runEnter);

// Create the filtered data with the input and refresh the html table
function runEnter() {
  d3.event.preventDefault();
    
  var inputElement = d3.select("#datetime");

  var inputValue = inputElement.property("value");

  var table = d3.select("#ufo-table");

  var filteredData = tableData.filter(record => record.datetime === inputValue);
   //console.log(filteredData);
  tbody.html("");

  filteredData.forEach(x => {
    var row = tbody.append("tr");
    Object.entries(x).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
  });
});
}