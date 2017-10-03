var svg = d3.select('svg');

d3.csv("./data.csv", function(data) {
     data.forEach(function(d) {
       d.alt = +d.alt
     });

console.log(data);

for (i = 0; i < data.length - 1; i++) {
  console.table(data[i]);
};

});
