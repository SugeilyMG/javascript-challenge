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

  var customFilter =d3.select(".filter-table");

  var selectedFilter = customFilter.property("value");
    
  var inputElement = d3.select("#datetime");

  var inputValue = inputElement.property("value");

  var table = d3.select("#ufo-table");

  if (selectedFilter == 1) {
    var filteredData = tableData.filter(record => record.datetime === inputValue);
  } 
  if  (selectedFilter == 4) {
    var filteredData = tableData.filter(record => record.country === inputValue);
  } 
  if  (selectedFilter == 2) {
    var filteredData = tableData.filter(record => record.city === inputValue);
  } 
  if (selectedFilter == 3) {
    var filteredData = tableData.filter(record => record.state === inputValue);
  }  else  if (selectedFilter == 5){
    var filteredData = tableData.filter(record => record.shape === inputValue);
  }

  // console.log(selectedFilter);
  // console.log(filteredData);
  tbody.html("");

  filteredData.forEach(x => {
    var row = tbody.append("tr");
    Object.entries(x).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
  });
});
}