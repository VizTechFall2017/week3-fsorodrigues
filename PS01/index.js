var svg = d3.select('svg');

var data = [];
var height = 600;
var width = 800;
var angle = 180;
var ringRadius = height * 0.45;
var ringCenterX = width/2;
var ringCenterY = height/2;
var totalCircles = 296;

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

var sat = 80;
var light = 50;
var opac = 0.8;

var getFill = function(d) {
  var hue = d.hue;
  return getColor(hue, sat, light, opac);
};

for (i = 0; i < totalCircles; i++){
    data.push({ x: ringRadius * Math.sin(angle) + ringCenterX , y: ringRadius * Math.cos(angle) + ringCenterY , r: 10 * Math.random(), hue: (i/8 + 1) * 10 });

   angle = angle + (2*Math.PI/totalCircles);
};

svg.selectAll('circle')
   .data(data)
   .enter()
   .append('circle')
   .attr('cx', function(d){
       console.log(d.x);
       return d.x;
   })
   .attr('cy', function(d){
       return d.y;
   })
   .attr('r', function(d){
       return d.r;
   })
   .attr('fill', getFill);
