var svg = d3.select('svg');

/* Your code goes here */
// var array = [ "milk", "eggs", "bread", "butter" ];
//
// var student = { "name": "Stephen", "job": "student", "age": 26 };
// var instructor = { "name": "Erica", "job": "professor", "age": 34 };
//
// var classroom = [
//   { "name": "Stephen", "job": "student", "age": 26 },
//   { "name": "Erica", "job": "professor", "age": 34 },
//   { "name": "Felippe", "job": "student", "age": 29 },
// ];
//
// console.log(array[(array.length - 1)]);
//
// console.log(student);
// console.log(student.age);
// console.log(instructor);
// console.log(instructor.age);
//
// console.log(classroom);
// console.log(classroom[1]);

// var myArray = [
//                 { "cx": 20, "cy": 0, "r": 20, "color": "blue" },
//                 { "cx": 40, "cy": 100, "r": 20, "color": "red" },
//                 { "cx": 80, "cy": 200, "r": 20, "color": "yellow" },
//                 { "cx": 100, "cy": 300, "r": 20, "color": "darkblue" },
//                 { "cx": 200, "cy": 400, "r": 20, "color": "pink" },
//               ];
//

// var myArray = [{}, {}, {}, {}, {}];
//
// for (i = 0; i < myArray.length; i++) {
//     myArray[i].name = "circle-" + i;
//     myArray[i].cx =  i * 400;
//     myArray[i].cy = i * 100;
//     myArray[i].radius = (i * 10) + 10;
//     console.log(myArray[i]);
// };
//
// svg.selectAll("circle")
//      .data(myArray)
//      .enter()
//      .append("circle")
//      .attr("cx", function(d) {
//         return d.cx;
//       })
//      .attr("cy", function(d) {
//        return d.cy;
//      })
//      .attr("r", function(d) {
//        return d.radius;
//      })
//      .attr("fill", "grey");

// var myArray = [{}, {}, {}, {}, {}];
//
// myArray.forEach(function (element, i) {
//     element.cx = i * 100;
//     element.cy = i * 100;
//     element.radius = (i * 10) + 10;
//     console.log(myArray[i])
// });

var myArray = [];

for (i = 0; i < 100; i++) {
    var object = { cx: 400 * Math.random(), cy: 400 * Math.random(), radius: (i * 0.2) + 5}
    myArray.push(object);
};

console.log(myArray);

svg.selectAll("circle")
     .data(myArray)
     .enter()
     .append("circle")
     .attr("cx", function(d) {
        return d.cx;
      })
     .attr("cy", function(d) {
       return d.cy;
     })
     .attr("r", function(d) {
       return d.radius;
     })
     .attr("fill", "grey");
