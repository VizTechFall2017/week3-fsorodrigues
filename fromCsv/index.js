// var svg = d3.select('svg');
//
// /* Your code goes here */
//
// d3.csv("./data.csv", function(dataIn) {
//     dataIn.forEach( function(d) {
//       d.x = +d.x
//       d.y = +d.y
//       d.r = +d.r
//     });
//
//     console.log(dataIn);
//
//     svg.selectAll("circle")
//          .data(dataIn)
//          .enter()
//          .append("circle")
//          .attr("cx", function(d) {
//             return d.x;
//           })
//          .attr("cy", function(d) {
//            return d.y;
//          })
//          .attr("r", function(d) {
//            return d.r;
//          })
//          .attr("fill", function(d) {
//            return d.fill;
//          });
//
// });

var scaleRuler = d3.scaleLinear()
                    .domain([0,100])
                    .range([0,10]);

console.log(scaleRuler(95));

var scaleSizes = d3.scaleOrdinal()
                    .domain(["small", "medium", "large"])
                    .range([30, 60, 90]);

console.log(scaleSizes("large"));
