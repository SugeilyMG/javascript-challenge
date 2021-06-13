// from data.js
var tableData = data;
var tbody = d3.select("tbody");
// YOUR CODE HERE!
tableData.forEach((ufos) => {
    var row = tbody.append("tr");
    Object.entries(ufos).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

