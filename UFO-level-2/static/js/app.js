// from data.js
var tableData = data;
var tbody = d3.select("tbody");
var button = d3.select("button");
var form = d3.select("form");



// YOUR CODE HERE!
tableData.forEach((ufos) => {
    var row = tbody.append("tr");
    Object.entries(ufos).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {
  d3.event.preventDefault();

  var inputElement = d3.select("#datetime");

  var inputValue = inputElement.property("value");

  var table = document.getElementById("#ufo-table");

  var filteredData = tableData.filter(record => record.datetime === inputValue)
  console.log(filteredData);

  
};
