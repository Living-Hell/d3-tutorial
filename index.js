// var svg = d3.select("svg");
// var svg = d3.selectAll("svg");

var svg = d3.select("#svgID");

var rect = svg
  .append("rect")
  .attr("height", 10)
  .attr("width", 10)
  .style("fill", "red");

rect.style("fill", "blue");

// d3.select("rect").style("fill", "green");
