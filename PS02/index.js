var svg = d3.select('svg');

var height = 600;
var width = 800;

var margin = { "top": height/10, "right": width/10, "bottom": height/10, "left": width/10 };


svg.attr("height", height)
   .attr("width", width);

function getColor(h, s, l, a) {
 var colorString = "hsla(" +
                   h + ", " +
                   s + "%, " +
                   l + "%, " +
                   a + ")";
 return colorString
                 };

var light = 50;
var opac = 0.6;

var getFill = function(d) {
 var hue = d.r * d.r;
 var sat = 2 * d.r;
 return getColor(hue, sat, light, opac);
};

d3.csv("./data.csv", function(data) {
   data.forEach(function(d) {
     d.x = +d.x
     d.y = +d.y
     d.r = +d.r
   });

var xMin = d3.min(data, function(d) { return +d.x });
var xMax = d3.max(data, function(d) { return +d.x });

var yMin = d3.min(data, function(d) { return +d.y });
var yMax = d3.max(data, function(d) { return +d.y });

var scaleX = d3.scaleLinear()
              .domain([xMin,xMax])
              .range([margin.left, width - margin.right]);

var scaleY = d3.scaleLinear()
              .domain([yMin,yMax])
              .range([margin.top, height - margin.bottom]);

var circles = svg.selectAll("circle")
                 .data(data)
                 .enter()
                 .append("circle");

circles.attr("cx", function(d){ return scaleX(d.x) })
       .attr("cy", function(d){ return scaleY(d.y) })
       .attr("r", function(d){ return 2 * d.r })
       .attr("fill", getFill);

var rects = svg.selectAll("rect")
                   .data(data)
                   .enter()
                   .append("rect");

rects.attr("x", function(d){ return scaleX(d.x) })
   .attr("y", function(d){ return scaleY(d.y) })
   .attr("height", function(d){ return d.r })
   .attr("width", function(d){ return d.r })
   .attr("transform", function (d) { return "rotate(" + d.r + ")" })
   .attr("fill", getFill);


});
