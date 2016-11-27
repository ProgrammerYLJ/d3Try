var rate = [['A',40],['B',20],['C',30],['D',10]];
  var div_data_bind = d3.select("body").selectAll("div").data(rate);
  div_set = div_data_bind.enter().append("div");
  div_data_bind.exit().remove();
  div_set.text(function(d,i) {
    return i + " / " + d[0];
  });
  div_set.style("height", "20px");
  div_set.style("background", "yellow");
  div_set.style("margin", "5px");
  div_set.style("width", function(d,i) {
    return (d[1] * 10)+"px";
  });
  
